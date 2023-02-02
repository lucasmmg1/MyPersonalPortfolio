let availableLanguages = ['pt-BR', 'en-US']

function SetupContentLanguage(language)
{
    switch (language)
    {
        case "pt-BR":
            SetupBrazilianPortugueseContent();
            break;

        case "en-US":
            SetupAmericanEnglishContent();
            break;
    }
}

function SetupBrazilianPortugueseContent()
{
    USED_OG_TITLE = OG_TITLE_PT;
    USED_OG_DESCRIPTION = OG_DESCRIPTION_PT;
    USED_HEADER_TITLE = HEADER_TITLE_PT;
    USED_TERMINAL_DESCRIPTION = TERMINAL_DESCRIPTION_PT;
    USED_NAVBAR_OPTIONS = NAVBAR_OPTIONS_PT;
    USED_BIO_SUBTITLE = BIO_SUBTITLE_PT;
    USED_LINK_BIO_CONTENT = LINK_BIO_CONTENT_PT;
    USED_SMALL_BIO_CONTENT = SMALL_BIO_CONTENT_PT;
    USED_BIG_BIO_LEFT_CONTENT = BIG_BIO_LEFT_CONTENT_PT;
    USED_BIG_BIO_RIGHT_CONTENT = BIG_BIO_RIGHT_CONTENT_PT;
    USED_BIG_BIO_CENTER_CONTENT = BIG_BIO_CENTER_CONTENT_PT;
    USED_PROJECTS_CATEGORIES_NAMES = PROJECTS_CATEGORIES_NAMES_PT;
    USED_PROJECT_SOFTWARES_NAMES = PROJECTS_SOFTWARES_NAMES_PT;
    USED_PROJECTS_MODAL_CAROUSEL_NEXT_BUTTON = PROJECTS_MODAL_CAROUSEL_NEXT_BUTTON_PT;
    USED_PROJECTS_MODAL_CAROUSEL_PREVIOUS_BUTTON = PROJECTS_MODAL_CAROUSEL_PREVIOUS_BUTTON_PT;
    USED_PROJECTS_APLICATIVOS_ROXSTAR_TITLE = PROJECTS_APLICATIVOS_ROXSTAR_TITLE_PT;
    USED_PROJECTS_APLICATIVOS_ROXSTAR_DESCRIPTION = PROJECTS_APLICATIVOS_ROXSTAR_DESCRIPTION_PT;
    USED_PROJECTS_APLICATIVOS_TURMADAMONICA_TITLE = PROJECTS_APLICATIVOS_TURMADAMONICA_TITLE_PT;
    USED_PROJECTS_APLICATIVOS_TURMADAMONICA_DESCRIPTION = PROJECTS_APLICATIVOS_TURMADAMONICA_DESCRIPTION_PT;
    USED_PROJECTS_APLICATIVOS_GALINHAPINTADINHA_TITLE = PROJECTS_APLICATIVOS_GALINHAPINTADINHA_TITLE_PT;
    USED_PROJECTS_APLICATIVOS_GALINHAPINTADINHA_DESCRIPTION = PROJECTS_APLICATIVOS_GALINHAPINTADINHA_DESCRIPTION_PT;
    USED_PROJECTS_APLICATIVOS_MUNDOBITA_TITLE = PROJECTS_APLICATIVOS_MUNDOBITA_TITLE_PT;
    USED_PROJECTS_APLICATIVOS_MUNDOBITA_DESCRIPTION = PROJECTS_APLICATIVOS_MUNDOBITA_DESCRIPTION_PT;
    USED_PROJECTS_MODELAGENS_DONUT_TITLE = PROJECTS_MODELAGENS_DONUT_TITLE_PT;
    USED_PROJECTS_MODELAGENS_DONUT_DESCRIPTION = PROJECTS_MODELAGENS_DONUT_DESCRIPTION_PT;
    USED_PROJECTS_MODELAGENS_HAMBURGUER_TITLE = PROJECTS_MODELAGENS_HAMBURGUER_TITLE_PT;
    USED_PROJECTS_MODELAGENS_HAMBURGUER_DESCRIPTION = PROJECTS_MODELAGENS_HAMBURGUER_DESCRIPTION_PT;
    USED_PROJECTS_MODELAGENS_SABREDELUZ_TITLE = PROJECTS_MODELAGENS_SABREDELUZ_TITLE_PT;
    USED_PROJECTS_MODELAGENS_SABREDELUZ_DESCRIPTION = PROJECTS_MODELAGENS_SABREDELUZ_DESCRIPTION_PT;
    USED_PROJECTS_MODELAGENS_TIEFIGTHER_TITLE = PROJECTS_MODELAGENS_TIEFIGHTER_TITLE_PT;
    USED_PROJECTS_MODELAGENS_TIEFIGHTER_DESCRIPTION = PROJECTS_MODELAGENS_TIEFIGHTER_DESCRIPTION_PT;
    USED_PROJECTS_MODELAGENS_ILUSAODEOTICA_TITLE = PROJECTS_MODELAGENS_ILUSAODEOTICA_TITLE_PT;
    USED_PROJECTS_MODELAGENS_ILUSAODEOTICA_DESCRIPTION = PROJECTS_MODELAGENS_ILUSAODEOTICA_DESCRIPTION_PT;
}
function SetupAmericanEnglishContent()
{
    USED_OG_TITLE = OG_TITLE_EN;
    USED_OG_DESCRIPTION = OG_DESCRIPTION_EN;
    USED_HEADER_TITLE = HEADER_TITLE_EN;
    USED_TERMINAL_DESCRIPTION = TERMINAL_DESCRIPTION_EN;
    USED_NAVBAR_OPTIONS = NAVBAR_OPTIONS_EN;
    USED_BIO_SUBTITLE = BIO_SUBTITLE_EN;
    USED_LINK_BIO_CONTENT = LINK_BIO_CONTENT_EN;
    USED_SMALL_BIO_CONTENT = SMALL_BIO_CONTENT_EN;
    USED_BIG_BIO_LEFT_CONTENT = BIG_BIO_LEFT_CONTENT_EN;
    USED_BIG_BIO_RIGHT_CONTENT = BIG_BIO_RIGHT_CONTENT_EN;
    USED_BIG_BIO_CENTER_CONTENT = BIG_BIO_CENTER_CONTENT_EN;
    USED_PROJECTS_CATEGORIES_NAMES = PROJECTS_CATEGORIES_NAMES_EN;
    USED_PROJECT_SOFTWARES_NAMES = PROJECTS_SOFTWARES_NAMES_EN;
    USED_PROJECTS_MODAL_CAROUSEL_NEXT_BUTTON = PROJECTS_MODAL_CAROUSEL_NEXT_BUTTON_EN;
    USED_PROJECTS_MODAL_CAROUSEL_PREVIOUS_BUTTON = PROJECTS_MODAL_CAROUSEL_PREVIOUS_BUTTON_EN;
    USED_PROJECTS_APLICATIVOS_ROXSTAR_TITLE = PROJECTS_APLICATIVOS_ROXSTAR_TITLE_EN;
    USED_PROJECTS_APLICATIVOS_ROXSTAR_DESCRIPTION = PROJECTS_APLICATIVOS_ROXSTAR_DESCRIPTION_EN;
    USED_PROJECTS_APLICATIVOS_TURMADAMONICA_TITLE = PROJECTS_APLICATIVOS_TURMADAMONICA_TITLE_EN;
    USED_PROJECTS_APLICATIVOS_TURMADAMONICA_DESCRIPTION = PROJECTS_APLICATIVOS_TURMADAMONICA_DESCRIPTION_EN;
    USED_PROJECTS_APLICATIVOS_GALINHAPINTADINHA_TITLE = PROJECTS_APLICATIVOS_GALINHAPINTADINHA_TITLE_EN;
    USED_PROJECTS_APLICATIVOS_GALINHAPINTADINHA_DESCRIPTION = PROJECTS_APLICATIVOS_GALINHAPINTADINHA_DESCRIPTION_EN;
    USED_PROJECTS_APLICATIVOS_MUNDOBITA_TITLE = PROJECTS_APLICATIVOS_MUNDOBITA_TITLE_EN;
    USED_PROJECTS_APLICATIVOS_MUNDOBITA_DESCRIPTION = PROJECTS_APLICATIVOS_MUNDOBITA_DESCRIPTION_EN;
    USED_PROJECTS_MODELAGENS_DONUT_TITLE = PROJECTS_MODELAGENS_DONUT_TITLE_EN;
    USED_PROJECTS_MODELAGENS_DONUT_DESCRIPTION = PROJECTS_MODELAGENS_DONUT_DESCRIPTION_EN;
    USED_PROJECTS_MODELAGENS_HAMBURGUER_TITLE = PROJECTS_MODELAGENS_HAMBURGUER_TITLE_EN;
    USED_PROJECTS_MODELAGENS_HAMBURGUER_DESCRIPTION = PROJECTS_MODELAGENS_HAMBURGUER_DESCRIPTION_EN;
    USED_PROJECTS_MODELAGENS_SABREDELUZ_TITLE = PROJECTS_MODELAGENS_SABREDELUZ_TITLE_EN;
    USED_PROJECTS_MODELAGENS_SABREDELUZ_DESCRIPTION = PROJECTS_MODELAGENS_SABREDELUZ_DESCRIPTION_EN;
    USED_PROJECTS_MODELAGENS_TIEFIGTHER_TITLE = PROJECTS_MODELAGENS_TIEFIGHTER_TITLE_EN;
    USED_PROJECTS_MODELAGENS_TIEFIGHTER_DESCRIPTION = PROJECTS_MODELAGENS_TIEFIGHTER_DESCRIPTION_EN;
    USED_PROJECTS_MODELAGENS_ILUSAODEOTICA_TITLE = PROJECTS_MODELAGENS_ILUSAODEOTICA_TITLE_EN;
    USED_PROJECTS_MODELAGENS_ILUSAODEOTICA_DESCRIPTION = PROJECTS_MODELAGENS_ILUSAODEOTICA_DESCRIPTION_EN;
}