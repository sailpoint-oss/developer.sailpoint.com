---
id: identity-list-item
title: IdentityListItem
pagination_label: IdentityListItem
sidebar_label: IdentityListItem
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'IdentityListItem'] 
slug: /tools/sdk/go/beta/models/identity-list-item
tags: ['SDK', 'Software Development Kit', 'IdentityListItem']
---

# IdentityListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | the identity ID | [optional] 
**DisplayName** |  Pointer to **string** | the display name of the identity | [optional] 
**FirstName** |  Pointer to **string** | the first name of the identity | [optional] 
**LastName** |  Pointer to **string** | the last name of the identity | [optional] 
**Active** |  Pointer to **bool** | indicates if an identity is active or not | [optional] [default to true]
**DeletedDate** |  Pointer to **NullableString** | the date when the identity was deleted | [optional] 

## Methods

### NewIdentityListItem

`func NewIdentityListItem() *IdentityListItem`

NewIdentityListItem instantiates a new IdentityListItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityListItemWithDefaults

`func NewIdentityListItemWithDefaults() *IdentityListItem`

NewIdentityListItemWithDefaults instantiates a new IdentityListItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IdentityListItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityListItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityListItem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityListItem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDisplayName

`func (o *IdentityListItem) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *IdentityListItem) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *IdentityListItem) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *IdentityListItem) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetFirstName

`func (o *IdentityListItem) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *IdentityListItem) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *IdentityListItem) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *IdentityListItem) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetLastName

`func (o *IdentityListItem) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *IdentityListItem) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *IdentityListItem) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *IdentityListItem) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetActive

`func (o *IdentityListItem) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *IdentityListItem) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *IdentityListItem) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *IdentityListItem) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetDeletedDate

`func (o *IdentityListItem) GetDeletedDate() string`

GetDeletedDate returns the DeletedDate field if non-nil, zero value otherwise.

### GetDeletedDateOk

`func (o *IdentityListItem) GetDeletedDateOk() (*string, bool)`

GetDeletedDateOk returns a tuple with the DeletedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedDate

`func (o *IdentityListItem) SetDeletedDate(v string)`

SetDeletedDate sets DeletedDate field to given value.

### HasDeletedDate

`func (o *IdentityListItem) HasDeletedDate() bool`

HasDeletedDate returns a boolean if a field has been set.

### SetDeletedDateNil

`func (o *IdentityListItem) SetDeletedDateNil(b bool)`

 SetDeletedDateNil sets the value for DeletedDate to be an explicit nil

### UnsetDeletedDate
`func (o *IdentityListItem) UnsetDeletedDate()`

UnsetDeletedDate ensures that no value is present for DeletedDate, not even an explicit nil

[[Back to top]](#) 


