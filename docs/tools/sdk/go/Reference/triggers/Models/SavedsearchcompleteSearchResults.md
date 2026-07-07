---
id: v1-savedsearchcomplete-search-results
title: SavedsearchcompleteSearchResults
pagination_label: SavedsearchcompleteSearchResults
sidebar_label: SavedsearchcompleteSearchResults
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SavedsearchcompleteSearchResults', 'V1SavedsearchcompleteSearchResults'] 
slug: /tools/sdk/go/triggers/models/savedsearchcomplete-search-results
tags: ['SDK', 'Software Development Kit', 'SavedsearchcompleteSearchResults', 'V1SavedsearchcompleteSearchResults']
---

# SavedsearchcompleteSearchResults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | Pointer to [**NullableSavedsearchcompleteSearchResultsAccount**](savedsearchcomplete-search-results-account) |  | [optional] 
**Entitlement** | Pointer to [**NullableSavedsearchcompleteSearchResultsEntitlement**](savedsearchcomplete-search-results-entitlement) |  | [optional] 
**Identity** | Pointer to [**NullableSavedsearchcompleteSearchResultsIdentity**](savedsearchcomplete-search-results-identity) |  | [optional] 

## Methods

### NewSavedsearchcompleteSearchResults

`func NewSavedsearchcompleteSearchResults() *SavedsearchcompleteSearchResults`

NewSavedsearchcompleteSearchResults instantiates a new SavedsearchcompleteSearchResults object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSavedsearchcompleteSearchResultsWithDefaults

`func NewSavedsearchcompleteSearchResultsWithDefaults() *SavedsearchcompleteSearchResults`

NewSavedsearchcompleteSearchResultsWithDefaults instantiates a new SavedsearchcompleteSearchResults object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *SavedsearchcompleteSearchResults) GetAccount() SavedsearchcompleteSearchResultsAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *SavedsearchcompleteSearchResults) GetAccountOk() (*SavedsearchcompleteSearchResultsAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *SavedsearchcompleteSearchResults) SetAccount(v SavedsearchcompleteSearchResultsAccount)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *SavedsearchcompleteSearchResults) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### SetAccountNil

`func (o *SavedsearchcompleteSearchResults) SetAccountNil(b bool)`

 SetAccountNil sets the value for Account to be an explicit nil

### UnsetAccount
`func (o *SavedsearchcompleteSearchResults) UnsetAccount()`

UnsetAccount ensures that no value is present for Account, not even an explicit nil
### GetEntitlement

`func (o *SavedsearchcompleteSearchResults) GetEntitlement() SavedsearchcompleteSearchResultsEntitlement`

GetEntitlement returns the Entitlement field if non-nil, zero value otherwise.

### GetEntitlementOk

`func (o *SavedsearchcompleteSearchResults) GetEntitlementOk() (*SavedsearchcompleteSearchResultsEntitlement, bool)`

GetEntitlementOk returns a tuple with the Entitlement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlement

`func (o *SavedsearchcompleteSearchResults) SetEntitlement(v SavedsearchcompleteSearchResultsEntitlement)`

SetEntitlement sets Entitlement field to given value.

### HasEntitlement

`func (o *SavedsearchcompleteSearchResults) HasEntitlement() bool`

HasEntitlement returns a boolean if a field has been set.

### SetEntitlementNil

`func (o *SavedsearchcompleteSearchResults) SetEntitlementNil(b bool)`

 SetEntitlementNil sets the value for Entitlement to be an explicit nil

### UnsetEntitlement
`func (o *SavedsearchcompleteSearchResults) UnsetEntitlement()`

UnsetEntitlement ensures that no value is present for Entitlement, not even an explicit nil
### GetIdentity

`func (o *SavedsearchcompleteSearchResults) GetIdentity() SavedsearchcompleteSearchResultsIdentity`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *SavedsearchcompleteSearchResults) GetIdentityOk() (*SavedsearchcompleteSearchResultsIdentity, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *SavedsearchcompleteSearchResults) SetIdentity(v SavedsearchcompleteSearchResultsIdentity)`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *SavedsearchcompleteSearchResults) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### SetIdentityNil

`func (o *SavedsearchcompleteSearchResults) SetIdentityNil(b bool)`

 SetIdentityNil sets the value for Identity to be an explicit nil

### UnsetIdentity
`func (o *SavedsearchcompleteSearchResults) UnsetIdentity()`

UnsetIdentity ensures that no value is present for Identity, not even an explicit nil

