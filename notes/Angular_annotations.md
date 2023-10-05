# Important Annotations in Angular

Angular uses annotations (decorators) to configure and enhance components, services, and other parts of an application. Here are some important annotations in Angular, along with descriptions and examples:

## @Component

**Description**: The `@Component` decorator is used to define an Angular component. It provides metadata that Angular needs to create and render the component.

**Example**:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hello, {{ name }}</h1>',
})
export class AppComponent {
  name = 'Angular';
}
```

## @NgModule

**Description**: The `@NgModule` decorator is used to define an Angular module. It collects and configures the dependencies that Angular needs to run an application.

**Example**:

```typescript
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

## @Injectable

**Description**: The `@Injectable` decorator is used to define a service class. It marks the class as one that can be injected into other classes as a dependency.

**Example**:

```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  getItems() {
    return ['Item 1', 'Item 2', 'Item 3'];
  }
}
```

## @Directive

**Description**: The `@Directive` decorator is used to define a custom directive in Angular. Directives allow you to create custom behavior for DOM elements.

**Example**:

```typescript
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

## @Pipe

**Description**: The `@Pipe` decorator is used to create a custom pipe in Angular. Pipes allow you to transform and format data in templates.

**Example**:

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
```

## @Input and @Output

**Description**: `@Input` and `@Output` are not decorators but rather decorators used within the `@Component` decorator to define inputs and outputs for a component. `@Input` allows data to flow into a component, while `@Output` allows data to flow out of a component.

**Example**:

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<button (click)="emitData()">Emit Data</button>',
})
export class ChildComponent {
  @Input() data: string;
  @Output() dataEmitter = new EventEmitter<string>();

  emitData() {
    this.dataEmitter.emit(this.data);
  }
}
```

These annotations are fundamental for configuring and enhancing various parts of an Angular application, providing the necessary metadata for Angular to understand and operate components, services, directives, and pipes effectively.
```