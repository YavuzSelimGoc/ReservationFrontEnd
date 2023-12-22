import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Pipe({
  name: 'customer'
})
export class CustomerPipe implements PipeTransform {

  transform(value: Customer[], filtertext: string): Customer[] {
    filtertext = filtertext ? filtertext.toLocaleLowerCase() : "";
    return filtertext
      ? value.filter(
          (p: Customer) =>
            p.customerName.toLocaleLowerCase().includes(filtertext) ||
            p.customerPhoneNumber.toLocaleLowerCase().includes(filtertext) ||
            p.customerAdress.toLocaleLowerCase().includes(filtertext)
        )
      : value;
  }

}
