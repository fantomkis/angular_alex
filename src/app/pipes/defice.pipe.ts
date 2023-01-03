import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'defice'
})

export class DeficePipe implements PipeTransform {
        transform(str: string, pow: string ='Pavel-'): string {
            return pow+ str ;
    
} } {

}