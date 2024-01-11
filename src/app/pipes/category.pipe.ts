import { Category } from 'src/app/models/category';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: Category[], filtertext: string): Category[] {
    filtertext=filtertext?filtertext.toLocaleLowerCase():""
    return filtertext?value.filter((p:Category)=>p.categoryName.toLocaleLowerCase()
    .indexOf(filtertext)!==-1):value;
  }
}
