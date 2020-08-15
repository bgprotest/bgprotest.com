import { TranslateService, LangChangeEvent } from '@ngx-translate/core';


export abstract class LangComponent {

    public lang: string;

    constructor (public translate: TranslateService) {
        this.lang = translate.currentLang;
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.lang = event.lang;
        });
    }
}