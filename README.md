# custom-angular-j-vote
Custom AngularJS Voting component

## How to use
1. inject 'vote' to your main module
2. use <vote></vote> in your template

## Attributes in vote element
```html
<vote ngModel="your-model" 
      key="a-name-or-id-to-identify-this-vote",
      user="username-or-id-to-identify-this-user",
      yes="name-of-yes-vote",
      no="name-of-no-vote",
      showUnique="true-if-you-need-to-show-only-unique-votes",
      showTotal="true-if-you-want-total-votes-regardless-of-how-many-times-user-clicks",
      callbackOnYes="function-you-want-to-execute-after-click-yes-vote",
      callbackOnNo="function-you-want-to-execute-after-click-no-vote">
</vote>
```
