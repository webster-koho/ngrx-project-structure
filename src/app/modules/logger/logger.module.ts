import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { LoggerService } from './services/logger.service';
import { LoggerEffects } from './store/effects/logger.effects';

@NgModule({
    declarations: [],
    imports: [CommonModule, EffectsModule.forFeature([LoggerEffects])],
    providers: [LoggerService],
})
export class LoggerModule {}
