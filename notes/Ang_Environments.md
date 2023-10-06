# Working with Environments in Angular

In Angular, environments are used to manage configuration settings for your application based on different deployment environments. This allows you to switch between settings for development, production, or custom environments without modifying your code. Angular provides default environment configuration files and a convenient way to define and access environment variables.

## Default Environments

Angular applications come with two default environment files:

- `src/environments/environment.ts`: Development environment configuration.
- `src/environments/environment.prod.ts`: Production environment configuration.

## Defining Environment Variables

In these environment files, you can define variables as key-value pairs. For example:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
};
```

For production, modify `environment.prod.ts` to have appropriate values:

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://production-api.example.com',
};
```

## Accessing Environment Variables

To access environment variables, import the `environment` object and use it where needed. For example:

```typescript
import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <h1>Environment Variables</h1>
    <p>Production Mode: {{ environment.production }}</p>
    <p>API URL: {{ environment.apiUrl }}</p>
  `,
})
export class AppComponent {}
```

## Building for Different Environments

Build for specific environments using the `--configuration` or `-c` option with the Angular CLI. For development:

```bash
ng build
```

For production:

```bash
ng build --configuration=production
```

## Custom Environments

Create custom environments by adding new environment configuration files (e.g., `environment.staging.ts`) and specifying configurations in the `angular.json` file. Build using custom environments with the `--configuration` option. Here's an example of a custom configuration in `angular.json`:

```json
"configurations": {
  "staging": {
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.staging.ts"
      }
    ],
    "optimization": true,
    "outputHashing": "all",
    // Other custom configuration options
  }
}
```

Build for custom environments:

```bash
ng build --configuration=staging
```

This allows you to create and manage different environment configurations for various deployment scenarios while maintaining a consistent codebase.
```