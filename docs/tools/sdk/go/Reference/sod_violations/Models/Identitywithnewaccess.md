---
id: v1-identitywithnewaccess
title: Identitywithnewaccess
pagination_label: Identitywithnewaccess
sidebar_label: Identitywithnewaccess
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identitywithnewaccess', 'V1Identitywithnewaccess'] 
slug: /tools/sdk/go/sodviolations/models/identitywithnewaccess
tags: ['SDK', 'Software Development Kit', 'Identitywithnewaccess', 'V1Identitywithnewaccess']
---

# Identitywithnewaccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **string** | Identity id to be checked. | 
**AccessRefs** | [**[]IdentitywithnewaccessAccessRefsInner**](identitywithnewaccess-access-refs-inner) | The list of entitlements to consider for possible violations in a preventive check. | 

## Methods

### NewIdentitywithnewaccess

`func NewIdentitywithnewaccess(identityId string, accessRefs []IdentitywithnewaccessAccessRefsInner, ) *Identitywithnewaccess`

NewIdentitywithnewaccess instantiates a new Identitywithnewaccess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitywithnewaccessWithDefaults

`func NewIdentitywithnewaccessWithDefaults() *Identitywithnewaccess`

NewIdentitywithnewaccessWithDefaults instantiates a new Identitywithnewaccess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *Identitywithnewaccess) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Identitywithnewaccess) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Identitywithnewaccess) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.


### GetAccessRefs

`func (o *Identitywithnewaccess) GetAccessRefs() []IdentitywithnewaccessAccessRefsInner`

GetAccessRefs returns the AccessRefs field if non-nil, zero value otherwise.

### GetAccessRefsOk

`func (o *Identitywithnewaccess) GetAccessRefsOk() (*[]IdentitywithnewaccessAccessRefsInner, bool)`

GetAccessRefsOk returns a tuple with the AccessRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRefs

`func (o *Identitywithnewaccess) SetAccessRefs(v []IdentitywithnewaccessAccessRefsInner)`

SetAccessRefs sets AccessRefs field to given value.



