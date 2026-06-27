---
id: v1-identityreferencewithnameandemail
title: Identityreferencewithnameandemail
pagination_label: Identityreferencewithnameandemail
sidebar_label: Identityreferencewithnameandemail
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityreferencewithnameandemail', 'V1Identityreferencewithnameandemail'] 
slug: /tools/sdk/go/requestableobjects/models/identityreferencewithnameandemail
tags: ['SDK', 'Software Development Kit', 'Identityreferencewithnameandemail', 'V1Identityreferencewithnameandemail']
---

# Identityreferencewithnameandemail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type can only be IDENTITY. This is read-only. | [optional] 
**Id** | Pointer to **string** | Identity ID. | [optional] 
**Name** | Pointer to **string** | Identity's human-readable display name. This is read-only. | [optional] 
**Email** | Pointer to **NullableString** | Identity's email address. This is read-only. | [optional] 

## Methods

### NewIdentityreferencewithnameandemail

`func NewIdentityreferencewithnameandemail() *Identityreferencewithnameandemail`

NewIdentityreferencewithnameandemail instantiates a new Identityreferencewithnameandemail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityreferencewithnameandemailWithDefaults

`func NewIdentityreferencewithnameandemailWithDefaults() *Identityreferencewithnameandemail`

NewIdentityreferencewithnameandemailWithDefaults instantiates a new Identityreferencewithnameandemail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Identityreferencewithnameandemail) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Identityreferencewithnameandemail) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Identityreferencewithnameandemail) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Identityreferencewithnameandemail) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Identityreferencewithnameandemail) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Identityreferencewithnameandemail) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Identityreferencewithnameandemail) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Identityreferencewithnameandemail) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Identityreferencewithnameandemail) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Identityreferencewithnameandemail) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Identityreferencewithnameandemail) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Identityreferencewithnameandemail) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEmail

`func (o *Identityreferencewithnameandemail) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Identityreferencewithnameandemail) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Identityreferencewithnameandemail) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Identityreferencewithnameandemail) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### SetEmailNil

`func (o *Identityreferencewithnameandemail) SetEmailNil(b bool)`

 SetEmailNil sets the value for Email to be an explicit nil

### UnsetEmail
`func (o *Identityreferencewithnameandemail) UnsetEmail()`

UnsetEmail ensures that no value is present for Email, not even an explicit nil

