---
id: v2025-account-updated-multi-value-attribute-changes-inner
title: AccountUpdatedMultiValueAttributeChangesInner
pagination_label: AccountUpdatedMultiValueAttributeChangesInner
sidebar_label: AccountUpdatedMultiValueAttributeChangesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountUpdatedMultiValueAttributeChangesInner', 'V2025AccountUpdatedMultiValueAttributeChangesInner'] 
slug: /tools/sdk/go/v2025/models/account-updated-multi-value-attribute-changes-inner
tags: ['SDK', 'Software Development Kit', 'AccountUpdatedMultiValueAttributeChangesInner', 'V2025AccountUpdatedMultiValueAttributeChangesInner']
---

# AccountUpdatedMultiValueAttributeChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the attribute that was changed. | 
**AddedValues** | [**[]AccountUpdatedMultiValueAttributeChangesInnerAddedValuesInner**](account-updated-multi-value-attribute-changes-inner-added-values-inner) | The values that were added to the attribute. | 
**RemovedValues** | [**[]AccountUpdatedMultiValueAttributeChangesInnerAddedValuesInner**](account-updated-multi-value-attribute-changes-inner-added-values-inner) | The values that were removed from the attribute. | 

## Methods

### NewAccountUpdatedMultiValueAttributeChangesInner

`func NewAccountUpdatedMultiValueAttributeChangesInner(name string, addedValues []AccountUpdatedMultiValueAttributeChangesInnerAddedValuesInner, removedValues []AccountUpdatedMultiValueAttributeChangesInnerAddedValuesInner, ) *AccountUpdatedMultiValueAttributeChangesInner`

NewAccountUpdatedMultiValueAttributeChangesInner instantiates a new AccountUpdatedMultiValueAttributeChangesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountUpdatedMultiValueAttributeChangesInnerWithDefaults

`func NewAccountUpdatedMultiValueAttributeChangesInnerWithDefaults() *AccountUpdatedMultiValueAttributeChangesInner`

NewAccountUpdatedMultiValueAttributeChangesInnerWithDefaults instantiates a new AccountUpdatedMultiValueAttributeChangesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AccountUpdatedMultiValueAttributeChangesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountUpdatedMultiValueAttributeChangesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountUpdatedMultiValueAttributeChangesInner) SetName(v string)`

SetName sets Name field to given value.


### GetAddedValues

`func (o *AccountUpdatedMultiValueAttributeChangesInner) GetAddedValues() []AccountUpdatedMultiValueAttributeChangesInnerAddedValuesInner`

GetAddedValues returns the AddedValues field if non-nil, zero value otherwise.

### GetAddedValuesOk

`func (o *AccountUpdatedMultiValueAttributeChangesInner) GetAddedValuesOk() (*[]AccountUpdatedMultiValueAttributeChangesInnerAddedValuesInner, bool)`

GetAddedValuesOk returns a tuple with the AddedValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddedValues

`func (o *AccountUpdatedMultiValueAttributeChangesInner) SetAddedValues(v []AccountUpdatedMultiValueAttributeChangesInnerAddedValuesInner)`

SetAddedValues sets AddedValues field to given value.


### GetRemovedValues

`func (o *AccountUpdatedMultiValueAttributeChangesInner) GetRemovedValues() []AccountUpdatedMultiValueAttributeChangesInnerAddedValuesInner`

GetRemovedValues returns the RemovedValues field if non-nil, zero value otherwise.

### GetRemovedValuesOk

`func (o *AccountUpdatedMultiValueAttributeChangesInner) GetRemovedValuesOk() (*[]AccountUpdatedMultiValueAttributeChangesInnerAddedValuesInner, bool)`

GetRemovedValuesOk returns a tuple with the RemovedValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemovedValues

`func (o *AccountUpdatedMultiValueAttributeChangesInner) SetRemovedValues(v []AccountUpdatedMultiValueAttributeChangesInnerAddedValuesInner)`

SetRemovedValues sets RemovedValues field to given value.



