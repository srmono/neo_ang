# Angular Data Bindings

Angular provides several types of bindings to connect data between the component and the HTML template. These bindings facilitate the synchronization of the view and model. Here are the main types of bindings in Angular with examples:

## Interpolation ({{}})

Interpolation allows you to embed expressions inside double curly braces in your template. Angular evaluates these expressions and replaces them with the results in the rendered view.

**Example:**

```html
<h1>{{ title }}</h1>
<p>{{ 'Hello, ' + name }}</p>
```

In this example, `title` and `name` are variables from the component, and their values will be displayed in the HTML.

## Property Binding ([property])

Property binding allows you to set an element's property to the value of an expression in the component. This is commonly used for attributes, such as `src`, `href`, and `disabled`.

**Example:**

```html
<img [src]="imageURL">
<button [disabled]="isButtonDisabled">Click Me</button>
```

In this example, `imageURL` and `isButtonDisabled` are component properties that are bound to the `src` attribute of the image and the `disabled` attribute of the button, respectively.

## Event Binding ((event))

Event binding allows you to listen for and respond to events triggered by the user, such as clicking a button or pressing a key.

**Example:**

```html
<button (click)="onButtonClick()">Click Me</button>
<input (input)="onInputChange($event)">
```

In this example, `(click)` listens for the button click event and `(input)` listens for input changes in the input element. When these events occur, they trigger the respective methods in the component, like `onButtonClick()` and `onInputChange($event)`.

## Two-way Binding ([(ngModel)])

Two-way binding allows you to bind both the property and the event together, so changes in the template are reflected in the component, and vice versa. It's commonly used with form inputs for bidirectional data flow.

**Example:**

```html
<input [(ngModel)]="userName">
```

In this example, changes made in the input field are reflected in the `userName` property of the component, and changes to the `userName` property in the component are automatically reflected in the input field.

## Class Binding ([class])

Class binding allows you to dynamically apply or remove CSS classes to elements based on component properties.

**Example:**

```html
<div [class.error]="hasError">This text has an error class</div>
```

In this example, the `error` class will be applied to the `div` element when the `hasError` property in the component is `true`.

These data bindings in Angular provide powerful tools for building dynamic and responsive web applications.
```