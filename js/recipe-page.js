const CAROUSEL_INTERVAL = 1500;
let recipes = loadOrInitRecipes();
let users = ucitajKorisnike();
let recipeId = getRecipeId();
let currentRecipe = recipes.find(recipe=>recipe.id== recipeId);
let currentUser = localStorage.getItem("tekuciKorisnik");
let colorMap = loadColors(users);

if (currentUser != null)
    currentUser = JSON.parse(currentUser);

function loadColors(users) {
    let colorMap = new Map();
    users.forEach(user => {
        colorMap.set(user.id, kreirajBojuNasumicno());
    })
    return colorMap;
}
function getMealType(recipeType) {
    switch (recipeType) {
        case "G": 
            return {
                text: messages.MAIN_COURSE,
                link: messages.MAIN_COURSE_PAGE
            }
        case "D":
            return {
                text: messages.DESSERT,
                link: messages.DESSERT_PAGE
            };
            
        case "U":
            return {
                text: messages.SNACK,
                link: messages.SNACK_PAGE
            };
        case "P":
            return {
                text: messages.APPERTIZER,
                link: messages.APPERTIZER_PAGE
            };
        default:
            return {
                text: "",
                link: ""
            };
    }
}

function getRecipeId() {
    let queryString = location.search;
    let urlParams = new URLSearchParams(queryString);
    let id = urlParams.get("id");
    if (!!id) {
        return parseInt(id);
    }
    return -1;
}
function galleryItem(imageLink) {
    let link = "../../slike/galerija/" + imageLink;
    /*
    <div id="prvi-slajd" class="carousel-item active">                                                      
        <a id="l1" href=""><img id="img-r1" class="w-100 d-block img-fluid recept-slika" alt="Second slide"></a>
        <div class="carousel-caption">
            <h2 id="rh1"></h2>
            <p id="rp1"></p>
        </div>    
    </div>
    */ 
   let $div = $("<div>").addClass("carousel-item recipe-gallery-item");
   let $img = $("<img>").addClass("w-100 d-block img-fluid");
   $img.attr("src", link);
   $div.append($img);
   return $div;
}
function commentItem(comment) {
    let user = users.find(user => user.id == comment.idUser);
    let color = colorMap.get(comment.idUser);
    let userName = user.ime + " "  + user.prezime;
    let initials = dohvatiInicijale(user.ime, user.prezime);
    let $initials = $("<div>").addClass("col-2 col-md-1");
    $initials.append(
        $("<div>").addClass("comment-initials").text(initials).css({"background":color})
    );
    let $div2 = $("<div>").addClass("col-9 col-md-10 comment-text");
    let $row = $("<div>").addClass("row");
    $div2.append($row);

    let $text = $("<div>").addClass("col-12").text(comment.text);
    let $user = $("<div>").addClass("col-12 font-weight-bold").text(userName); 
    $row.append($user).append($text);
    return $("<div>").addClass("row comment-item").append($initials).append($div2);
}
function insertRecipes(comments) {
    let $list = $("#recipe-comments");
    let $comments = recipes.map(commentItem);
    $list.empty();
    $comments.forEach($comment => {
        $list.append($comment);
    });
}
function showComments() {
    let $commentList = $("#recipe-comments");
    $commentList.empty();

    let $comments = currentRecipe.comments.map(commentItem);
    $comments.forEach($comment => {
        $commentList.append($comment);
    });
}
function findMyReview() {
    if (!currentRecipe) {
        return null;
    }
    if (!currentUser) {
        return null;
    }
    let oldReview = currentRecipe.reviews.find(review => review.idUser == currentUser.id);    
    if (!oldReview)
        return null;
    return oldReview;
}
function showReview() {
    let $averageReview = $("#recipe-average-review");
    let $oldReview = $("#old-review");
    $averageReview.text(messages.AVERAGE_REVIEW + getReviewValue(currentRecipe));
    let myReview = findMyReview();
    $oldReview.empty();
    if (!!myReview) {
        $oldReview.html(
            "<b>" + messages.ALREADY_REVIEWED   + myReview.mark + 
            "</b><br/>" + 
            messages.CHANGE_REVIEWED
        );
    } else {
        $oldReview.text(messages.MAKE_REVIEW);
    }
}
function updateView() {
    showComments();
    showReview();
}
$(document).ready(()=>{
    if (!currentRecipe) {
        let $recipeView = $("#recipe-view");
        $recipeView.empty();
        $recipeView
            .addClass("text-center")
            .append($("<h2>").text(messages.RECIPE_NOT_EXIST));
        return;
    }
    
    let author = users.find(user => user.id == currentRecipe.idUser);
    let $recipeName = $(".recipe-name");
    let $pageTitle = $("title");
    let $recipeDescription = $("#recipe-description");
    let $recipeDuration = $("#recipe-duration");
    let $recipeAuthor = $("#recipe-author");
    let $commentAndReview = $("#comment-and-review");
    let $cannotCommentAndReview = $("#cannot-comment-and-review")
    let $commentTextArea = $("#comment-text-area");
    let $commentButton = $("#comment-add-button");
    let $reviewMark = $("#review-mark");
    let $makeReviewButton = $("#make-review-button");
    let $pagePrintButton = $("#page-print-button");
    let $recipeTypeBreadcrumb = $("#recipe-type-breadcrumb");
    let $recipeVideoRow = $("#recipe-video-row");
    let $recipeVideoEmbed = $("#recipe-video-embed");
    let $recipeImageRow = $("#recipe-image-row");
    let $recipeGallery = $("#recipe-gallery");
    let $recipeGalleryList = $("#recipe-gallery-list");

    $recipeName.text(currentRecipe.name);
    $pageTitle.text(messages.SITE_NAME + " - " + currentRecipe.name);
    $recipeDescription.text(currentRecipe.description);
    $recipeDuration.text(currentRecipe.duration);
    $recipeAuthor.text(messages.AUTHOR + author.ime + " " + author.prezime);


    let mealType = getMealType(currentRecipe.type);
    $recipeTypeBreadcrumb.attr("href", mealType.link).text(mealType.text);

    if (!!currentUser) {
        $commentAndReview.removeClass("d-none");
    } else {
        $cannotCommentAndReview.removeClass("d-none");
    }
    if (!!currentRecipe.videos) {
        $recipeVideoRow.removeClass("d-none");
        $recipeVideoEmbed.attr("src", currentRecipe.videos[0]);
    }
    if (!!currentRecipe.images) {
        let $list = currentRecipe.images.map(galleryItem);
        $list[0].addClass("active");
        $list.forEach($image => $recipeGalleryList.append($image));
        $recipeGallery.carousel({
            //interval: CAROUSEL_INTERVAL
        });
        $recipeImageRow.removeClass("d-none");
    }


    $commentButton.on("click", ()=>{
        let comment = $commentTextArea.val();
        if (comment.length == 0) {
            return;
        }
        $commentTextArea.val("");

        currentRecipe.comments.unshift({
            idUser:currentUser.id,
            text: comment
        });
        localStorage.setItem("recipes", JSON.stringify(recipes));
        updateView();
    });

    $makeReviewButton.on("click", ()=> {
        let mark = parseInt($reviewMark.val());
        if (mark == 0) {
            return;
        }
        if (!currentUser) {
            return;
        }
        let oldReview = findMyReview();
        if (!!oldReview) {
            oldReview.mark = mark;
        } else {
            currentRecipe.reviews.push({
                mark: mark,
                idUser: currentUser.id
            });
        }
        localStorage.setItem("recipes", JSON.stringify(recipes));
        updateView();
    });
    $pagePrintButton.on("click", ()=>{
        window.print();
    });
    updateView();
});