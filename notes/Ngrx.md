# NgRx in Angular

NgRx is a popular state management library for Angular applications. It's based on the Redux pattern and helps manage the state of your application in a predictable and consistent way. NgRx provides tools for managing application state, handling side effects, and organizing code in a maintainable manner.

## Core Concepts

### 1. Store

**Description**: The Store is the heart of the NgRx pattern. It holds the entire state of your application as a single JavaScript object.

**Example**:

```typescript
// app.state.ts
export interface AppState {
  counter: number;
}
```

### 2. Actions

**Description**: Actions are plain objects that describe what happened in your application. They carry information such as the type of action and any associated data.

**Example**:

```typescript
// counter.actions.ts
import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
```

### 3. Reducers

**Description**: Reducers are pure functions that specify how the application's state changes in response to actions. They take the previous state and an action and return the next state.

**Example**:

```typescript
// counter.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './counter.actions';

export const initialState = { counter: 0 };

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ counter: state.counter + 1 })),
  on(decrement, (state) => ({ counter: state.counter - 1 }))
);
```

### 4. Effects

**Description**: Effects are used for managing side effects, such as HTTP requests or other asynchronous operations. They listen for specific actions and perform additional logic.

**Example**:

```typescript
// counter.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CounterService } from './counter.service';
import { loadCounter, loadCounterSuccess, loadCounterFailure } from './counter.actions';

@Injectable()
export class CounterEffects {
  loadCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCounter),
      switchMap(() =>
        this.counterService.getCounter().pipe(
          map((data) => loadCounterSuccess({ data })),
          catchError((error) => of(loadCounterFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private counterService: CounterService) {}
}
```

### 5. Selectors

**Description**: Selectors are pure functions used to extract and transform data from the store. They help in composing derived data.

**Example**:

```typescript
// counter.selectors.ts
import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectCounter = (state: AppState) => state.counter;

export const selectDoubledCounter = createSelector(selectCounter, (counter) => counter * 2);
```

## Example Usage

In an Angular component:

```typescript
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, loadCounter } from './store/counter.actions';
import { selectCounter, selectDoubledCounter } from './store/counter.selectors';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter: {{ counter }}</h1>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="loadData()">Load Data</button>
    <h2>Doubled Counter: {{ doubledCounter }}</h2>
  `,
})
export class CounterComponent {
  counter: number;
  doubledCounter: number;

  constructor(private store: Store) {
    this.store.select(selectCounter).subscribe((value) => (this.counter = value));
    this.store.select(selectDoubledCounter).subscribe((value) => (this.doubledCounter = value));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  loadData() {
    this.store.dispatch(loadCounter());
  }
}
```

This is a basic introduction to NgRx in Angular. It helps manage the state of your application, making it more predictable and maintainable.
```