---
id: udk-error-handling
title: Error handling
pagination_label: UDK
sidebar_label: Error Handling
sidebar_position: 3
sidebar_class_name: rudk
keywords: ['UI', 'development', 'kit', 'error', 'handling']
description: Error handling in your custom user interfaces
slug: /tools/ui-development-kit/error-handling
tags: ['UI', 'Error']
---

Ideally, everything in your custom UIs will work smoothly, but you will likely encounter errors at some point when you're implementing a page. For example, if you provide an invalid filter or sorter, the list accounts endpoint will return a 400 error. Even though the actual calls happen in the backend electron code, you almost never need to interact with that part of the application. Instead, it is best to handle all the errors on the front end

If any of your backend calls result in a server error or bad request, you also want to handle those errors.

Read this guide to learn how to use the UI Development Kit to handle errors.

## Handling errors in your code

If you provide an invalid filter or sorter, the [List Accounts Endpoint](https://developer.sailpoint.com/docs/api/v2025/list-accounts) returns a 400 error. This example uses a try/catch to handle the error and present the user with what went wrong.

This is just one example of how things can be handled during an error event. Sometimes it can be better to present the user with a popup, or you can use a snackbar to show a quick popup on the bottom of the page. 

```typescript

    // initially, set error to false and have no error message
    this.error = false;
    this.errorMessage = '';

    try {
      const response = await this.sdk.listAccounts(request);
      if (response.status !== 200) { // check to see if the response code is the expected value. In case it's not, just throw an error as it will be handled in the try catch block
        throw new Error(`Failed to load accounts: ${response.statusText}`);
      }
      this.accounts = response.data;
    } catch (error) { // In case the SDK encounters some error in the request
      console.error('Error loading accounts:', error);
      this.error = true;
      this.errorMessage = error instanceof Error ? error.message : String(error);
      this.accounts = [];
    } finally {
      this.loading = false;
    }
```

Present the user with the error message if there is an error present during loading any data
```html
  <div *ngIf="error" class="error-message mat-elevation-z1">
    <mat-icon color="warn">error</mat-icon>
    <span>Error loading accounts: {{ errorMessage }}</span>
  </div>
```

## Retrieving logs from the app

When running the built app locally, you can retrieve details logging from the app by running the executable with the `--enable-logging` flag enabled. For example:

```powershell
 & '.\sailpoint-ui-development-kit 1.0.0.exe' --enable-logging
```

## Discuss

The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions.

To learn more about the ISC UI Development Kit and discuss it with SailPoint Developer Community members, go to the [SailPoint Developer Community Forum](https://developer.sailpoint.com/discuss/c/identity-security-cloud/6).
