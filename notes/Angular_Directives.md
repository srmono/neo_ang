# Angular Directives

Directives in Angular are markers on DOM elements that tell Angular to do something to the element. They are a fundamental part of Angular's template syntax. Angular provides several types of directives to help manipulate and control the DOM. Here are the main types of directives in Angular with examples:

## Structural Directives

Structural directives manipulate the structure of the DOM by adding or removing elements.

### 1. `*ngIf`

The `*ngIf` directive conditionally renders or removes an element based on a condition.

**Example:**

```html
<div *ngIf="showElement">This element is shown when 'showElement' is true.</div>
```

### 2. `*ngFor`

The `*ngFor` directive creates a list of elements based on an iterable data source.

**Example:**

```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

## Attribute Directives

Attribute directives change the appearance or behavior of an element.

### 3. `[ngStyle]`

The `[ngStyle]` directive dynamically applies styles to an element based on a component property.

**Example:**

```html
<div [ngStyle]="{ 'color': textColor, 'font-size': fontSize }">This text has dynamic styles.</div>
```

### 4. `[ngClass]`

The `[ngClass]` directive dynamically adds or removes CSS classes from an element based on component properties.

**Example:**

```html
<div [ngClass]="{ 'error': hasError, 'highlight': isHighlighted }">This text can have dynamic classes.</div>
```

## Custom Directives

You can create custom directives to extend Angular's functionality.

### 5. Custom Directive (e.g., `appCustomDirective`)

You can create custom directives to encapsulate complex behavior and reuse it in multiple places in your application.

**Example:**

```html
<!-- Usage of a custom directive -->
<div appCustomDirective></div>
```

## Component Directives

In Angular, components are a type of directive. They are the building blocks of your application, representing parts of the user interface.

### 6. Component (e.g., `app-my-component`)

A component is a directive with a template. It encapsulates a part of the user interface and its logic.

**Example:**

```html
<!-- Usage of a custom component -->
<app-my-component></app-my-component>
```

These directives in Angular provide powerful tools for creating dynamic and interactive web applications by extending the HTML's capabilities and allowing you to control the rendering and behavior of elements.
```