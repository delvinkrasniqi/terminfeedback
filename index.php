<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="apple-touch-icon" sizes="180x180" href="./assets/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./assets/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./assets/icons/favicon-16x16.png">
    <link rel="manifest" href="./assets/icons/site.webmanifest">
    <link rel="shortcut icon" href="./assets/icons/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="./assets/icons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap" rel="stylesheet">
    <script src="./assets/jquery.js"></script>
    <link rel="stylesheet" href="./assets/picker/css/default.css">
    <link rel="stylesheet" href="./assets/picker/css/default.time.css">
    <link rel="stylesheet" href="./assets/picker/css/default.date.css">
    <link rel="stylesheet" href="./style.css">
    <title>Termin Feedback</title>
</head>

<body>

    <?php
       
          function translate($keyWord) {

            //no url param at start so it will use the DE json
           if((!isset($_GET["lang"])) || ($_GET["lang"] !== "de"  && $_GET["lang"] !== "it"  && $_GET["lang"] !== "fr")){
            $words = json_decode(file_get_contents("translations/resource-de.json"), true);
            echo $words[$keyWord];
           }
           else{
            if( htmlspecialchars($_GET["lang"]) == "de"){
                $words = json_decode(file_get_contents("translations/resource-de.json"), true);
                echo $words[$keyWord];
            }
            if(htmlspecialchars($_GET["lang"]) == "it"){
                $words = json_decode(file_get_contents("translations/resource-it.json"), true);
                echo $words[$keyWord];
            }
            if(htmlspecialchars($_GET["lang"])=="fr"){
                $words = json_decode(file_get_contents("translations/resource-fr.json"), true);
                echo $words[$keyWord];
            }
           }
           

          }
    
        ?>


    <div class="container">
        <div class="feedback">
            <div class="feedback-header">
                <h2 class="feedback-header__title">
                    <?php translate("title") ?>
                </h2>
                <p class="feedback-header__id">
                    #<span>264545</span>
                </p>
                <img src="./assets/logo.png" alt="" id="logo">
            </div>
            <div class="feedback-main">
                <div class="feedback-information">
                    <h2 class="termin-details"><?php translate('termin-details') ?></h2>
                    <div class="feedbacker">
                        <h2 class="feedbacker_name">Herr Stauber</h2>
                        <p><span class="street">Lysstrasse 3</span>, <span class="plz">2560</span>, <span
                                class="city">Nidau</span></p>
                    </div>
                    <div class="feedback-date">
                        <h2><span class="date">15.04.2021</span> <?php translate("at") ?> <span
                                class="time">17:00</span></h2>
                        <p>Alban Gerguri</p>
                    </div>
                </div>
                <div class="termindate">
                    <div class="input-group">
                        <label for="termin-datum"><?php  translate("termin-date") ?></label>
                        <!-- <input type="date" name="termin-datum" id="termin-datum"> -->
                        <input type="date" id="termin-datum" name="termin-datum" data-value="">
                    </div>
                    <div class="input-group">
                        <label for="termin-time"><?php translate("termin-time") ?></label>
                        <!-- <input type="time" name="termin-time" id="termin-time" min="08:00" max="21:00" step="1800"> -->
                        <input type="text" id="termin-time" name="termin-time">
                    </div>
                </div>
                <div class="mjv-box">
                    <div class="input-group">
                        <label><?php translate("mjv") ?></label> <input type="number" name="kkabschluss" min="0"
                            max="10" step="1" inputmode="numeric" pattern="[0-9]*">
                    </div>
                </div>
                <div class="feedback-form">
                    <form action="" method="post">
                        <div class="checkboxes-group">
                            <h2><?php  translate("status-title");?></h2>
                            <div class="input-group">
                                <input type="checkbox" name="checkboxes" value="Nicht besucht" class="checkboxInput"
                                    id="nichtbesucht"><label
                                    for="nichtbesucht"><?php translate("not-visited") ?></label>
                            </div>
                            <div class="input-group">
                                <input type="checkbox" name="checkboxes" value="Nicht zu Hause" class="checkboxInput"
                                    id="nichtzuhause"><label for="nichtzuhause"><?php translate("not-home") ?></label>
                            </div>
                            <div class="input-group">
                                <input type="checkbox" name="checkboxes" value="Stattgefunden" class="checkboxInput"
                                    id="stattgefunden"><label for="stattgefunden"><?php translate("happened") ?></label>
                            </div>
                            <div class="input-group">
                                <input type="checkbox" name="checkboxes" value="Offen" class="checkboxInput"
                                    id="offen"><label for="offen"><?php translate("open") ?></label>
                            </div>
                            <div class="input-group">
                                <input type="checkbox" name="checkboxes" value="Positiv" class="checkboxInput"
                                    id="positiv"><label for="positiv"><?php translate("positive") ?></label>
                            </div>
                            <div class="input-group">
                                <input type="checkbox" name="checkboxes" value="Abgesagt" class="checkboxInput"
                                    id="abgesagt"><label for="abgesagt"><?php translate("canceled") ?></label>
                            </div>
                            <div class="input-group">
                                <input type="checkbox" name="checkboxes" value="Wollte kein Termin"
                                    class="checkboxInput" id="wolltekeintermin"><label
                                    for="wolltekeintermin"><?php translate('not-wanted');?></label>
                            </div>
                            <div class="input-group">
                                <input type="checkbox" name="checkboxes" value="Behandlung" class="checkboxInput"
                                    id="behandlung"><label for="behandlung"><?php translate("treatment") ?></label>
                            </div>
                            <div class="input-group">
                                <input type="checkbox" name="checkboxes" value="MJV" class="checkboxInput"
                                    id="mjv"><label for="mjv"><?php translate("mjv"); ?></label>
                            </div>
                            <div class="input-group">
                                <input type="checkbox" name="checkboxes" value="Negativ" class="checkboxInput"
                                    id="negativ"><label for="negativ"><?php translate("negative") ?></label>
                            </div>
                        </div>

                        <div class="ratings-group">
                            <h2>Abaschlusse</h2>
                            <div class="input-group">
                                <label for="kkabschluss"><?php translate("kk-degree") ?></label> <input type="number"
                                    name="kkabschluss" min="0" max="10" step="1" inputmode="numeric" pattern="[0-9]*"
                                    id="kkabschluss">
                            </div>
                            <div class="input-group">
                                <label for="lebensversicherung"><?php translate("life-insurance") ?></label> <input
                                    type="number" name="lebensversicherung" min="0" max="10" step="1"
                                    inputmode="numeric" pattern="[0-9]*" id="lebensversicherung">
                            </div>
                            <div class="input-group">
                                <label for="autoversicherung"><?php translate("car-insurance") ?></label> <input
                                    type="number" name="autoversicherung" min="0" max="10" step="1" inputmode="numeric"
                                    pattern="[0-9]*" id="autoversicherung">
                            </div>
                            <div class="input-group">
                                <label for="hausrat"><?php translate("household-items") ?></label> <input type="number"
                                    name="hausrat" min="0" max="10" step="1" inputmode="numeric" pattern="[0-9]*"
                                    id="hausrat">
                            </div>
                            <div class="input-group">
                                <label for="haftpflicht"><?php translate("liability") ?></label> <input type="number"
                                    name="haftpflicht" min="0" max="10" step="1" inputmode="numeric" pattern="[0-9]*"
                                    id="haftpflicht">
                            </div>
                            <div class="input-group">
                                <label for="rechtsschutz"><?php translate("legal-protection") ?></label> <input
                                    type="number" name="rechtsschutz" min="0" max="10" step="1" inputmode="numeric"
                                    pattern="[0-9]*" id="rechtsschutz">
                            </div>
                            <div class="input-group">
                                <label for="mandate"><?php translate("mandates") ?></label> <input type="number"
                                    name="mandate" min="0" max="10" step="1" inputmode="numeric" pattern="[0-9]*"
                                    id="mandate">
                            </div>
                            <div class="input-group">
                                <label for="kmu"><?php translate("kmu") ?></label> <input type="number" name="kmu"
                                    min="0" max="10" step="1" inputmode="numeric" pattern="[0-9]*" id="kmu">
                            </div>
                            <div class="input-group">
                                <label for="steuererklärung"><?php translate("tax-declaration") ?></label> <input
                                    type="number" name="steuererklärung" min="0" max="10" step="1" inputmode="numeric"
                                    pattern="[0-9]*" id="steuererklärung">
                            </div>
                        </div>
                        <div class="comment-group">
                            <div class="input-group">
                                <label for="comment"><?php translate("comment") ?></label>
                                <textarea name="comment" id="comment" cols="30" rows="5"></textarea>
                            </div>
                        </div>
                        <button id="submitbutton"><?php translate("save") ?></button>
                    </form>
                </div>

            </div>
        </div>
    </div>


    <script src="./assets/picker/js/picker.js"></script>
    <script src="./assets/picker/js/legacy.js"></script>
    <script src="./assets/picker/js/picker.time.js"></script>
    <script src="./assets/picker/js/picker.date.js"></script>
    <script src="./assets/main.js"></script>
</body>

</html>