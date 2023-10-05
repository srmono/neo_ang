# Custom Pipes in Angular

In Angular, you can create custom pipes to transform and format data in your templates. Custom pipes are a way to encapsulate common data transformation tasks and make them reusable across your application.

## Creating a Custom Pipe

To create a custom pipe in Angular, follow these steps:

1. **Generate a Pipe**:

   Use the Angular CLI to generate a new pipe. Open your terminal and run the following command:

   ```bash
   ng generate pipe my-custom-pipe
   ```

   This will create a new pipe file (`my-custom-pipe.pipe.ts`) and add it to your module's declarations.

2. **Implement the Pipe**:

   Open the generated pipe file (e.g., `my-custom-pipe.pipe.ts`) and implement the `PipeTransform` interface. You need to provide a `transform` method that takes an input value and optional parameters and returns the transformed output.

   ```typescript
   import { Pipe, PipeTransform } from '@angular/core';

   @Pipe({
     name: 'myCustomPipe'
   })
   export class MyCustomPipe implements PipeTransform {
     transform(value: any, ...args: any[]): any {
       // Your transformation logic here
     }
   }
   ```

3. **Use the Pipe in Templates**:

   You can now use your custom pipe in Angular templates by using the pipe operator (`|`). For example:

   ```html
   <p>{{ someValue | myCustomPipe:param1:param2 }}</p>
   ```

   Here, `someValue` is the input to the pipe, and `param1` and `param2` are optional parameters you can pass to the `transform` method.

## Example: Creating a Uppercase Pipe

Let's create a simple custom pipe that converts text to uppercase.

1. **Generate the Pipe**:

   Run the Angular CLI command to generate a new pipe:

   ```bash
   ng generate pipe uppercase
   ```

2. **Implement the Pipe**:

   Open the `uppercase.pipe.ts` file and implement the pipe:

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

3. **Use the Pipe**:

   You can use the `uppercase` pipe in your Angular templates like this:

   ```html
   <p>{{ 'Hello, World' | uppercase }}</p>
   ```

   This will display "HELLO, WORLD" in your application.

Custom pipes in Angular allow you to encapsulate and reuse data transformation logic throughout your application, making it more maintainable and clean.
```