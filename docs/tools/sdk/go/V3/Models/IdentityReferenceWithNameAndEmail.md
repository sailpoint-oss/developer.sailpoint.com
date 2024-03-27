---
id: identity-reference-with-name-and-email
title: IdentityReferenceWithNameAndEmail
pagination_label: IdentityReferenceWithNameAndEmail
sidebar_label: IdentityReferenceWithNameAndEmail
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'IdentityReferenceWithNameAndEmail'] 
slug: /tools/sdk/go/v3/models/identity-reference-with-name-and-email
tags: ['SDK', 'Software Development Kit', 'IdentityReferenceWithNameAndEmail']
---

# IdentityReferenceWithNameAndEmail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **string** | The type can only be IDENTITY. This is read-only | [optional] 
**Id** |  Pointer to **string** | Identity id. | [optional] 
**Name** |  Pointer to **string** | Human-readable display name of identity. This is read-only | [optional] 
**Email** |  Pointer to **string** | Email address of identity. This is read-only | [optional] 

## Methods

### NewIdentityReferenceWithNameAndEmail

`func NewIdentityReferenceWithNameAndEmail() *IdentityReferenceWithNameAndEmail`

NewIdentityReferenceWithNameAndEmail instantiates a new IdentityReferenceWithNameAndEmail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityReferenceWithNameAndEmailWithDefaults

`func NewIdentityReferenceWithNameAndEmailWithDefaults() *IdentityReferenceWithNameAndEmail`

NewIdentityReferenceWithNameAndEmailWithDefaults instantiates a new IdentityReferenceWithNameAndEmail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *IdentityReferenceWithNameAndEmail) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentityReferenceWithNameAndEmail) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentityReferenceWithNameAndEmail) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *IdentityReferenceWithNameAndEmail) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *IdentityReferenceWithNameAndEmail) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityReferenceWithNameAndEmail) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityReferenceWithNameAndEmail) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityReferenceWithNameAndEmail) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *IdentityReferenceWithNameAndEmail) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityReferenceWithNameAndEmail) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityReferenceWithNameAndEmail) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IdentityReferenceWithNameAndEmail) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEmail

`func (o *IdentityReferenceWithNameAndEmail) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *IdentityReferenceWithNameAndEmail) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *IdentityReferenceWithNameAndEmail) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *IdentityReferenceWithNameAndEmail) HasEmail() bool`

HasEmail returns a boolean if a field has been set.


[[Back to top]](#) 


