---
id: v1-identitylistitem
title: Identitylistitem
pagination_label: Identitylistitem
sidebar_label: Identitylistitem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identitylistitem', 'V1Identitylistitem'] 
slug: /tools/sdk/go/identityhistory/models/identitylistitem
tags: ['SDK', 'Software Development Kit', 'Identitylistitem', 'V1Identitylistitem']
---

# Identitylistitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the identity ID | [optional] 
**DisplayName** | Pointer to **string** | the display name of the identity | [optional] 
**FirstName** | Pointer to **NullableString** | the first name of the identity | [optional] 
**LastName** | Pointer to **NullableString** | the last name of the identity | [optional] 
**Active** | Pointer to **bool** | indicates if an identity is active or not | [optional] [default to true]
**DeletedDate** | Pointer to **NullableString** | the date when the identity was deleted | [optional] 

## Methods

### NewIdentitylistitem

`func NewIdentitylistitem() *Identitylistitem`

NewIdentitylistitem instantiates a new Identitylistitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitylistitemWithDefaults

`func NewIdentitylistitemWithDefaults() *Identitylistitem`

NewIdentitylistitemWithDefaults instantiates a new Identitylistitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Identitylistitem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Identitylistitem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Identitylistitem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Identitylistitem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDisplayName

`func (o *Identitylistitem) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Identitylistitem) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Identitylistitem) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Identitylistitem) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetFirstName

`func (o *Identitylistitem) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *Identitylistitem) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *Identitylistitem) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *Identitylistitem) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### SetFirstNameNil

`func (o *Identitylistitem) SetFirstNameNil(b bool)`

 SetFirstNameNil sets the value for FirstName to be an explicit nil

### UnsetFirstName
`func (o *Identitylistitem) UnsetFirstName()`

UnsetFirstName ensures that no value is present for FirstName, not even an explicit nil
### GetLastName

`func (o *Identitylistitem) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *Identitylistitem) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *Identitylistitem) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *Identitylistitem) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### SetLastNameNil

`func (o *Identitylistitem) SetLastNameNil(b bool)`

 SetLastNameNil sets the value for LastName to be an explicit nil

### UnsetLastName
`func (o *Identitylistitem) UnsetLastName()`

UnsetLastName ensures that no value is present for LastName, not even an explicit nil
### GetActive

`func (o *Identitylistitem) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *Identitylistitem) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *Identitylistitem) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *Identitylistitem) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetDeletedDate

`func (o *Identitylistitem) GetDeletedDate() string`

GetDeletedDate returns the DeletedDate field if non-nil, zero value otherwise.

### GetDeletedDateOk

`func (o *Identitylistitem) GetDeletedDateOk() (*string, bool)`

GetDeletedDateOk returns a tuple with the DeletedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedDate

`func (o *Identitylistitem) SetDeletedDate(v string)`

SetDeletedDate sets DeletedDate field to given value.

### HasDeletedDate

`func (o *Identitylistitem) HasDeletedDate() bool`

HasDeletedDate returns a boolean if a field has been set.

### SetDeletedDateNil

`func (o *Identitylistitem) SetDeletedDateNil(b bool)`

 SetDeletedDateNil sets the value for DeletedDate to be an explicit nil

### UnsetDeletedDate
`func (o *Identitylistitem) UnsetDeletedDate()`

UnsetDeletedDate ensures that no value is present for DeletedDate, not even an explicit nil

