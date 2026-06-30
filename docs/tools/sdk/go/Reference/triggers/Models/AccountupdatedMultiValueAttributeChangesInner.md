---
id: v1-accountupdated-multi-value-attribute-changes-inner
title: AccountupdatedMultiValueAttributeChangesInner
pagination_label: AccountupdatedMultiValueAttributeChangesInner
sidebar_label: AccountupdatedMultiValueAttributeChangesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountupdatedMultiValueAttributeChangesInner', 'V1AccountupdatedMultiValueAttributeChangesInner'] 
slug: /tools/sdk/go/triggers/models/accountupdated-multi-value-attribute-changes-inner
tags: ['SDK', 'Software Development Kit', 'AccountupdatedMultiValueAttributeChangesInner', 'V1AccountupdatedMultiValueAttributeChangesInner']
---

# AccountupdatedMultiValueAttributeChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the attribute that was changed. | 
**AddedValues** | [**[]AccountupdatedMultiValueAttributeChangesInnerAddedValuesInner**](accountupdated-multi-value-attribute-changes-inner-added-values-inner) | The values that were added to the attribute. | 
**RemovedValues** | [**[]AccountupdatedMultiValueAttributeChangesInnerAddedValuesInner**](accountupdated-multi-value-attribute-changes-inner-added-values-inner) | The values that were removed from the attribute. | 

## Methods

### NewAccountupdatedMultiValueAttributeChangesInner

`func NewAccountupdatedMultiValueAttributeChangesInner(name string, addedValues []AccountupdatedMultiValueAttributeChangesInnerAddedValuesInner, removedValues []AccountupdatedMultiValueAttributeChangesInnerAddedValuesInner, ) *AccountupdatedMultiValueAttributeChangesInner`

NewAccountupdatedMultiValueAttributeChangesInner instantiates a new AccountupdatedMultiValueAttributeChangesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountupdatedMultiValueAttributeChangesInnerWithDefaults

`func NewAccountupdatedMultiValueAttributeChangesInnerWithDefaults() *AccountupdatedMultiValueAttributeChangesInner`

NewAccountupdatedMultiValueAttributeChangesInnerWithDefaults instantiates a new AccountupdatedMultiValueAttributeChangesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AccountupdatedMultiValueAttributeChangesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountupdatedMultiValueAttributeChangesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountupdatedMultiValueAttributeChangesInner) SetName(v string)`

SetName sets Name field to given value.


### GetAddedValues

`func (o *AccountupdatedMultiValueAttributeChangesInner) GetAddedValues() []AccountupdatedMultiValueAttributeChangesInnerAddedValuesInner`

GetAddedValues returns the AddedValues field if non-nil, zero value otherwise.

### GetAddedValuesOk

`func (o *AccountupdatedMultiValueAttributeChangesInner) GetAddedValuesOk() (*[]AccountupdatedMultiValueAttributeChangesInnerAddedValuesInner, bool)`

GetAddedValuesOk returns a tuple with the AddedValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddedValues

`func (o *AccountupdatedMultiValueAttributeChangesInner) SetAddedValues(v []AccountupdatedMultiValueAttributeChangesInnerAddedValuesInner)`

SetAddedValues sets AddedValues field to given value.


### GetRemovedValues

`func (o *AccountupdatedMultiValueAttributeChangesInner) GetRemovedValues() []AccountupdatedMultiValueAttributeChangesInnerAddedValuesInner`

GetRemovedValues returns the RemovedValues field if non-nil, zero value otherwise.

### GetRemovedValuesOk

`func (o *AccountupdatedMultiValueAttributeChangesInner) GetRemovedValuesOk() (*[]AccountupdatedMultiValueAttributeChangesInnerAddedValuesInner, bool)`

GetRemovedValuesOk returns a tuple with the RemovedValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemovedValues

`func (o *AccountupdatedMultiValueAttributeChangesInner) SetRemovedValues(v []AccountupdatedMultiValueAttributeChangesInnerAddedValuesInner)`

SetRemovedValues sets RemovedValues field to given value.



