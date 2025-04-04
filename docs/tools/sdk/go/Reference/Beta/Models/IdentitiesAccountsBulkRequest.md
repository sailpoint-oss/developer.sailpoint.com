---
id: beta-identities-accounts-bulk-request
title: IdentitiesAccountsBulkRequest
pagination_label: IdentitiesAccountsBulkRequest
sidebar_label: IdentitiesAccountsBulkRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentitiesAccountsBulkRequest', 'BetaIdentitiesAccountsBulkRequest'] 
slug: /tools/sdk/go/beta/models/identities-accounts-bulk-request
tags: ['SDK', 'Software Development Kit', 'IdentitiesAccountsBulkRequest', 'BetaIdentitiesAccountsBulkRequest']
---

# IdentitiesAccountsBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityIds** | Pointer to **[]string** | The ids of the identities for which enable/disable accounts. | [optional] 

## Methods

### NewIdentitiesAccountsBulkRequest

`func NewIdentitiesAccountsBulkRequest() *IdentitiesAccountsBulkRequest`

NewIdentitiesAccountsBulkRequest instantiates a new IdentitiesAccountsBulkRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitiesAccountsBulkRequestWithDefaults

`func NewIdentitiesAccountsBulkRequestWithDefaults() *IdentitiesAccountsBulkRequest`

NewIdentitiesAccountsBulkRequestWithDefaults instantiates a new IdentitiesAccountsBulkRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityIds

`func (o *IdentitiesAccountsBulkRequest) GetIdentityIds() []string`

GetIdentityIds returns the IdentityIds field if non-nil, zero value otherwise.

### GetIdentityIdsOk

`func (o *IdentitiesAccountsBulkRequest) GetIdentityIdsOk() (*[]string, bool)`

GetIdentityIdsOk returns a tuple with the IdentityIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityIds

`func (o *IdentitiesAccountsBulkRequest) SetIdentityIds(v []string)`

SetIdentityIds sets IdentityIds field to given value.

### HasIdentityIds

`func (o *IdentitiesAccountsBulkRequest) HasIdentityIds() bool`

HasIdentityIds returns a boolean if a field has been set.


