# Angular Styles Management

Angular offers multiple approaches for managing styles in your application. Depending on your project's requirements and preferences, you can choose one of the following approaches:

## 1. Inline Styles

Inline styles involve adding styles directly to the Angular component's template. This approach is useful for small, component-specific styles.

**Example:**

```html
<!-- app.component.html -->

<div [style.color]="'red'">
  This text is red.
</div>
```

## 2. External Stylesheets

You can use external CSS or SASS/SCSS stylesheets to define your application's styles. This approach is ideal for global styles and larger applications.

**Example:**

Create an external stylesheet (e.g., `styles.css`) and include it in your Angular application:

```html
<!-- index.html -->

<link rel="stylesheet" href="styles.css">
```

## 3. Component Styles

Angular allows you to define component-specific styles using the `styles` metadata property in the component decorator.

**Example:**

```typescript
// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>This text has component-specific styles</div>`,
  styles: [
    `
    div {
      color: blue;
      font-size: 16px;
    }
    `,
  ],
})
export class AppComponent {}
```

## 4. CSS Modules

CSS Modules offer a modular and scoped approach to styling in Angular. It generates unique class names for styles, ensuring encapsulation.

**Example:**

Create a CSS module file (e.g., `app.component.module.css`) and use it in your component:

```typescript
// app.component.ts

import { Component } from '@angular/core';
import styles from './app.component.module.css';

@Component({
  selector: 'app-root',
  template: `<div class="${styles.myDiv}">Styled with CSS Modules</div>`,
  styleUrls: ['./app.component.module.css'],
})
export class AppComponent {}
```

## 5. Style Binding

Style binding in Angular allows you to dynamically set inline styles based on component properties or expressions.

**Example:**

```html
<!-- app.component.html -->

<div [style.color]="isRed ? 'red' : 'blue'">
  This text changes color based on a condition.
</div>
```

## 6. View Encapsulation

Angular provides view encapsulation modes (`None`, `Emulated`, and `ShadowDom`) to isolate component styles. Choose the mode that best fits your needs.

**Example:**

```typescript
// app.component.ts

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="my-div">Styled with View Encapsulation</div>`,
  styles: [
    `
    .my-div {
      color: red;
    }
    `,
  ],
  encapsulation: ViewEncapsulation.None, // Use None, Emulated, or ShadowDom
})
export class AppComponent {}
```
By choosing the right styling approach for your Angular application, you can maintain a well-structured and maintainable codebase.

---

# Using CSS Modules in Angular

CSS Modules provide a modular and scoped approach to styling in Angular applications. With CSS Modules, class names are generated dynamically, ensuring encapsulation and preventing style conflicts. Below is a simple example of how to use CSS Modules in an Angular component.

## Step 1: Create a CSS Module

1. Create a CSS file for your component and name it with the `.module.css` extension. For example, `app.component.module.css`.

    ```css
    /* app.component.module.css */

    .my-div {
      color: blue;
      font-size: 16px;
    }
    ```

2. Define your styles in this CSS file as you normally would.

## Step 2: Use CSS Modules in Your Component

1. In your Angular component file (e.g., `app.component.ts`), import the CSS module file.

    ```typescript
    // app.component.ts

    import { Component } from '@angular/core';
    import styles from './app.component.module.css';

    @Component({
      selector: 'app-root',
      template: `<div class="${styles.myDiv}">Styled with CSS Modules</div>`,
      styleUrls: ['./app.component.module.css'],
    })
    export class AppComponent {}
    ```

2. Import the CSS module using `import styles from './app.component.module.css';`.

3. Use the generated class names from the CSS module within your component's template, as shown in the `template` property.

Now, the styles you defined in `app.component.module.css` are scoped to the component, and you won't encounter global style conflicts.

## Step 3: Enjoy Scoped Styles

With CSS Modules, you can create modular and scoped styles for your Angular components, enhancing maintainability and preventing unintended style clashes.

Remember to adapt the file names and component names according to your specific use case.
