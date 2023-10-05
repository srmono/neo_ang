# Angular Component Lifecycle

Angular components have a lifecycle with various hooks or methods that are automatically called at different stages of the component's existence. Understanding the component lifecycle is crucial for tasks like initialization, data fetching, and cleanup. Here are the key stages in the Angular component lifecycle with examples and use cases for each:

## Constructor

The component's constructor is the first method that gets called when a component is created. It's where you can initialize properties and perform tasks before the component is fully created.

**Example:**

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<p>{{ message }}</p>'
})
export class ExampleComponent {
  message: string;

  constructor() {
    this.message = 'Component is created';
    console.log('Constructor is called');
  }
}
```

**Use Case:** You can use the constructor to set up initial values and configurations.

## ngOnChanges

The `ngOnChanges` hook is called when the component receives input properties, providing information about the changes.

**Example:**

```typescript
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<p>{{ message }}</p>'
})
export class ExampleComponent implements OnChanges {
  @Input() inputMessage: string;
  message: string;

  ngOnChanges(changes: SimpleChanges) {
    this.message = `Input message changed to: ${changes.inputMessage.currentValue}`;
  }
}
```

**Use Case:** Use `ngOnChanges` to react to changes in input properties.

## ngOnInit

`ngOnInit` is called after the component's data-bound properties are initialized. It's a good place to perform initial data fetching.

**Example:**

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<p>{{ message }}</p>'
})
export class ExampleComponent implements OnInit {
  message: string;

  ngOnInit() {
    // Fetch data from an API
    this.message = 'Data fetched from an API';
  }
}
```

**Use Case:** Use `ngOnInit` for tasks like fetching data or initializing components.

## ngAfterViewInit

The `ngAfterViewInit` hook is called after the component's view and child views are initialized. It's useful when you need to interact with the DOM.

**Example:**

```typescript
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<button #myButton>Click Me</button>'
})
export class ExampleComponent implements AfterViewInit {
  ngAfterViewInit() {
    const button = document.querySelector('#myButton');
    button.addEventListener('click', () => {
      alert('Button clicked!');
    });
  }
}
```

**Use Case:** Use `ngAfterViewInit` to perform DOM-related operations.

## ngOnDestroy

The `ngOnDestroy` hook is called just before the component is destroyed. It's a good place to clean up resources, such as unsubscribing from observables.

**Example:**

```typescript
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-example',
  template: '<p>Component with subscriptions</p>'
})
export class ExampleComponent implements OnDestroy {
  private subscription: Subscription;

  constructor() {
    this.subscription = someObservable.subscribe((data) => {
      // Handle data
    });
  }

  ngOnDestroy() {
    // Clean up resources
    this.subscription.unsubscribe();
  }
}
```

**Use Case:** Use `ngOnDestroy` to prevent memory leaks by unsubscribing from observables and cleaning up resources.

Understanding the Angular component lifecycle allows you to manage the behavior of your components at various stages, making your applications more efficient and robust.
```