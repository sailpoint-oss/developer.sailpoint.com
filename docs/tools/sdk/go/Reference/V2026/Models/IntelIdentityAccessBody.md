---
id: v2026-intel-identity-access-body
title: IntelIdentityAccessBody
pagination_label: IntelIdentityAccessBody
sidebar_label: IntelIdentityAccessBody
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelIdentityAccessBody', 'V2026IntelIdentityAccessBody'] 
slug: /tools/sdk/go/v2026/models/intel-identity-access-body
tags: ['SDK', 'Software Development Kit', 'IntelIdentityAccessBody', 'V2026IntelIdentityAccessBody']
---

# IntelIdentityAccessBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Accounts** | [**[]IntelAccessAccountWire**](intel-access-account-wire) | Accounts for the identity in camelCase wire format from Shelby List Accounts. | 
**PrivilegedAccessItems** | [**[]IntelPrivilegedAccessItemWire**](intel-privileged-access-item-wire) | Privileged access items for the identity returned by SDS Search. | 

## Methods

### NewIntelIdentityAccessBody

`func NewIntelIdentityAccessBody(accounts []IntelAccessAccountWire, privilegedAccessItems []IntelPrivilegedAccessItemWire, ) *IntelIdentityAccessBody`

NewIntelIdentityAccessBody instantiates a new IntelIdentityAccessBody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelIdentityAccessBodyWithDefaults

`func NewIntelIdentityAccessBodyWithDefaults() *IntelIdentityAccessBody`

NewIntelIdentityAccessBodyWithDefaults instantiates a new IntelIdentityAccessBody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccounts

`func (o *IntelIdentityAccessBody) GetAccounts() []IntelAccessAccountWire`

GetAccounts returns the Accounts field if non-nil, zero value otherwise.

### GetAccountsOk

`func (o *IntelIdentityAccessBody) GetAccountsOk() (*[]IntelAccessAccountWire, bool)`

GetAccountsOk returns a tuple with the Accounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccounts

`func (o *IntelIdentityAccessBody) SetAccounts(v []IntelAccessAccountWire)`

SetAccounts sets Accounts field to given value.


### GetPrivilegedAccessItems

`func (o *IntelIdentityAccessBody) GetPrivilegedAccessItems() []IntelPrivilegedAccessItemWire`

GetPrivilegedAccessItems returns the PrivilegedAccessItems field if non-nil, zero value otherwise.

### GetPrivilegedAccessItemsOk

`func (o *IntelIdentityAccessBody) GetPrivilegedAccessItemsOk() (*[]IntelPrivilegedAccessItemWire, bool)`

GetPrivilegedAccessItemsOk returns a tuple with the PrivilegedAccessItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegedAccessItems

`func (o *IntelIdentityAccessBody) SetPrivilegedAccessItems(v []IntelPrivilegedAccessItemWire)`

SetPrivilegedAccessItems sets PrivilegedAccessItems field to given value.



