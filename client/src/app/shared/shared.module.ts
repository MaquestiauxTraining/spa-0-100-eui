import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { UxAllModule } from '@eui/components';

@NgModule({
    imports: [
        UxAllModule,
        TranslateModule,
    ],
    declarations: [
    ],
    exports: [
        UxAllModule,
        TranslateModule,
    ]
})
export class SharedModule {}
