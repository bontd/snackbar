# Snackbar

Highly customizable notification snackbars (toasts) that can be stacked on top of each other.

## Installation

```sh
npm install @focela/snackbar
```

## Quick Start

**Snackbar: Display notifications with call of a function.**

Easy to use, customizable, smooth transitions, stack and queue them up!

### How to use

Instantiate a `SnackbarProvider` component and start showing snackbars

```jsx
import { SnackbarProvider, enqueueSnackbar } from '@focela/snackbar';

const App = () => {
  return (
    <div>
      <SnackbarProvider />
      <button onClick={() => enqueueSnackbar('That was easy!')}>Show snackbar</button>
    </div>
  );
};
```

Alternatively, You can use `useSnackbar` hook to display Snackbars. Just remember to wrap your app inside of
a `SnackbarProvider` to have access to the hook context:

```jsx
import { SnackbarProvider, useSnackbar } from '@focela/snackbar';

// wrap your app
<SnackbarProvider>
  <App />
  <MyButton />
</SnackbarProvider>

const MyButton = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  return <Button onClick={() => enqueueSnackbar('I love hooks')}>Show snackbar</Button>;
};
```

## Contributing

We encourage and support an active, healthy community of contributors &mdash;
including you! Details are in the [contribution guide](CONTRIBUTING.md) and
the [code of conduct](CODE_OF_CONDUCT.md). The snackbar maintainers keep an eye on
issues and pull requests, but you can also report any negative conduct to
opensource@focela.com. That email list is a private, safe space; even the snackbar
maintainers don't have access, so don't hesitate to hold us to a high
standard.

<hr>

Released under the [MIT License](LICENSE).

[link-license]: https://opensource.org/license/mit