# Core Concepts in Angular

Angular is a powerful framework for building web applications. These are some of the core concepts in Angular, along with descriptions and examples:

## Components

**Description**: Components are the building blocks of Angular applications. They represent different parts of the user interface and encapsulate the logic, data, and presentation for that part. Components are reusable and can be composed to create complex user interfaces.

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

## Templates

**Description**: Templates define the HTML structure of a component's view. They use Angular-specific syntax for data binding and rendering dynamic content.

**Example**:

```html
<h1>Hello, {{ name }}</h1>
```

## Directives

**Description**: Directives are special markers in the template that tell Angular to do something with a DOM element. Angular provides built-in directives like `*ngFor` for looping and `*ngIf` for conditional rendering.

**Example**:

```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

## Services

**Description**: Services are used for encapsulating reusable business logic or data that can be shared across multiple components. They promote the principle of separation of concerns.

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

## Dependency Injection

**Description**: Angular's dependency injection system allows you to inject dependencies, like services, into components or other services. This promotes modular, testable, and maintainable code.

**Example**:

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: '<h1>{{ data }}</h1>',
})
export class AppComponent {
  constructor(private dataService: DataService) {
    this.data = this.dataService.getItems();
  }
}
```

## Modules

**Description**: Modules are used to organize the application into functional units. They group related components, directives, services, and pipes together. Angular applications are divided into one or more modules.

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

## Routing

**Description**: Angular's router allows you to create single-page applications with multiple views and routes. It enables navigation between different components without full page reloads.

**Example**:

```typescript
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
```

These core concepts are fundamental to Angular and understanding them is essential for building robust and maintainable Angular applications.
```