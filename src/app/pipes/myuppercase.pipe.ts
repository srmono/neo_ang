import {Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'myuppercase'
})

export class MyUpperCasePipe implements PipeTransform{

    transform(value: string): string {
        if(!value) return value;

        return value.toUpperCase()
    }
}