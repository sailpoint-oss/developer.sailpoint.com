---
id: v1-accessprofiledetails-account-selector
title: AccessprofiledetailsAccountSelector
pagination_label: AccessprofiledetailsAccountSelector
sidebar_label: AccessprofiledetailsAccountSelector
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessprofiledetailsAccountSelector', 'V1AccessprofiledetailsAccountSelector'] 
slug: /tools/sdk/go/apps/models/accessprofiledetails-account-selector
tags: ['SDK', 'Software Development Kit', 'AccessprofiledetailsAccountSelector', 'V1AccessprofiledetailsAccountSelector']
---

# AccessprofiledetailsAccountSelector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Selectors** | Pointer to [**[]Appaccessprofileselector**](appaccessprofileselector) |  | [optional] 

## Methods

### NewAccessprofiledetailsAccountSelector

`func NewAccessprofiledetailsAccountSelector() *AccessprofiledetailsAccountSelector`

NewAccessprofiledetailsAccountSelector instantiates a new AccessprofiledetailsAccountSelector object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessprofiledetailsAccountSelectorWithDefaults

`func NewAccessprofiledetailsAccountSelectorWithDefaults() *AccessprofiledetailsAccountSelector`

NewAccessprofiledetailsAccountSelectorWithDefaults instantiates a new AccessprofiledetailsAccountSelector object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSelectors

`func (o *AccessprofiledetailsAccountSelector) GetSelectors() []Appaccessprofileselector`

GetSelectors returns the Selectors field if non-nil, zero value otherwise.

### GetSelectorsOk

`func (o *AccessprofiledetailsAccountSelector) GetSelectorsOk() (*[]Appaccessprofileselector, bool)`

GetSelectorsOk returns a tuple with the Selectors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectors

`func (o *AccessprofiledetailsAccountSelector) SetSelectors(v []Appaccessprofileselector)`

SetSelectors sets Selectors field to given value.

### HasSelectors

`func (o *AccessprofiledetailsAccountSelector) HasSelectors() bool`

HasSelectors returns a boolean if a field has been set.

### SetSelectorsNil

`func (o *AccessprofiledetailsAccountSelector) SetSelectorsNil(b bool)`

 SetSelectorsNil sets the value for Selectors to be an explicit nil

### UnsetSelectors
`func (o *AccessprofiledetailsAccountSelector) UnsetSelectors()`

UnsetSelectors ensures that no value is present for Selectors, not even an explicit nil

