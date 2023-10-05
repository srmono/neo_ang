# Important Pipes in Angular

Angular provides several built-in pipes that allow you to transform and format data in your templates. Here are some of the important built-in pipes, along with descriptions and examples:

## 1. **{{ expression | uppercase }}**

**Description**: The `uppercase` pipe is used to transform a string to all uppercase letters.

**Example**:

```html
<p>{{ 'Hello, Angular' | uppercase }}</p>
<!-- Output: HELLO, ANGULAR -->
```

## 2. **{{ expression | lowercase }}**

**Description**: The `lowercase` pipe is used to transform a string to all lowercase letters.

**Example**:

```html
<p>{{ 'Hello, Angular' | lowercase }}</p>
<!-- Output: hello, angular -->
```

## 3. **{{ expression | titlecase }}**

**Description**: The `titlecase` pipe is used to capitalize the first letter of each word in a string.

**Example**:

```html
<p>{{ 'hello, angular' | titlecase }}</p>
<!-- Output: Hello, Angular -->
```

## 4. **{{ expression | date:'format' }}**

**Description**: The `date` pipe is used to format dates. You can provide a format string to customize the date format.

**Example**:

```html
<p>{{ someDate | date:'short' }}</p>
<!-- Output: 10/5/23, 12:34 PM -->
```

## 5. **{{ expression | currency:'symbol':'symbol-narrow':'info':'digitsInfo':'locale' }}**

**Description**: The `currency` pipe is used to format numbers as currency. You can specify the currency symbol, narrow symbol, additional information, digits info, and locale.

**Example**:

```html
<p>{{ price | currency:'USD':'code' }}</p>
<!-- Output: $123.45 -->
```

## 6. **{{ expression | percent:'digitsInfo' }}**

**Description**: The `percent` pipe is used to format numbers as percentages. You can specify the number of decimal digits.

**Example**:

```html
<p>{{ 0.1234 | percent:'2.2-2' }}</p>
<!-- Output: 12.34% -->
```

## 7. **{{ expression | number:'digitsInfo' }}**

**Description**: The `number` pipe is used to format numbers. You can specify the number of decimal digits.

**Example**:

```html
<p>{{ 1234.5678 | number:'4.2-2' }}</p>
<!-- Output: 1,234.57 -->
```

## 8. **{{ expression | async }}**

**Description**: The `async` pipe is used to subscribe to an `Observable` or `Promise` and automatically update the view when the data is available.

**Example**:

```html
<p>{{ data$ | async }}</p>
```

These built-in pipes simplify data manipulation and formatting tasks in Angular, making it easy to display data in a user-friendly way.
```