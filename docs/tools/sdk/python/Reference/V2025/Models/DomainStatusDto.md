---
id: v2025-domain-status-dto
title: DomainStatusDto
pagination_label: DomainStatusDto
sidebar_label: DomainStatusDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DomainStatusDto', 'V2025DomainStatusDto'] 
slug: /tools/sdk/go/v2025/models/domain-status-dto
tags: ['SDK', 'Software Development Kit', 'DomainStatusDto', 'V2025DomainStatusDto']
---

# DomainStatusDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | New UUID associated with domain to be verified | [optional] 
**Domain** | Pointer to **string** | A domain address | [optional] 
**DkimEnabled** | Pointer to **map[string]interface{}** | DKIM is enabled for this domain | [optional] [default to false]
**DkimTokens** | Pointer to **[]string** | DKIM tokens required for authentication | [optional] 
**DkimVerificationStatus** | Pointer to **string** | Status of DKIM authentication | [optional] 

## Methods

### NewDomainStatusDto

`func NewDomainStatusDto() *DomainStatusDto`

NewDomainStatusDto instantiates a new DomainStatusDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDomainStatusDtoWithDefaults

`func NewDomainStatusDtoWithDefaults() *DomainStatusDto`

NewDomainStatusDtoWithDefaults instantiates a new DomainStatusDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DomainStatusDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DomainStatusDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DomainStatusDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DomainStatusDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDomain

`func (o *DomainStatusDto) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *DomainStatusDto) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *DomainStatusDto) SetDomain(v string)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *DomainStatusDto) HasDomain() bool`

HasDomain returns a boolean if a field has been set.

### GetDkimEnabled

`func (o *DomainStatusDto) GetDkimEnabled() map[string]interface{}`

GetDkimEnabled returns the DkimEnabled field if non-nil, zero value otherwise.

### GetDkimEnabledOk

`func (o *DomainStatusDto) GetDkimEnabledOk() (*map[string]interface{}, bool)`

GetDkimEnabledOk returns a tuple with the DkimEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDkimEnabled

`func (o *DomainStatusDto) SetDkimEnabled(v map[string]interface{})`

SetDkimEnabled sets DkimEnabled field to given value.

### HasDkimEnabled

`func (o *DomainStatusDto) HasDkimEnabled() bool`

HasDkimEnabled returns a boolean if a field has been set.

### GetDkimTokens

`func (o *DomainStatusDto) GetDkimTokens() []string`

GetDkimTokens returns the DkimTokens field if non-nil, zero value otherwise.

### GetDkimTokensOk

`func (o *DomainStatusDto) GetDkimTokensOk() (*[]string, bool)`

GetDkimTokensOk returns a tuple with the DkimTokens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDkimTokens

`func (o *DomainStatusDto) SetDkimTokens(v []string)`

SetDkimTokens sets DkimTokens field to given value.

### HasDkimTokens

`func (o *DomainStatusDto) HasDkimTokens() bool`

HasDkimTokens returns a boolean if a field has been set.

### GetDkimVerificationStatus

`func (o *DomainStatusDto) GetDkimVerificationStatus() string`

GetDkimVerificationStatus returns the DkimVerificationStatus field if non-nil, zero value otherwise.

### GetDkimVerificationStatusOk

`func (o *DomainStatusDto) GetDkimVerificationStatusOk() (*string, bool)`

GetDkimVerificationStatusOk returns a tuple with the DkimVerificationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDkimVerificationStatus

`func (o *DomainStatusDto) SetDkimVerificationStatus(v string)`

SetDkimVerificationStatus sets DkimVerificationStatus field to given value.

### HasDkimVerificationStatus

`func (o *DomainStatusDto) HasDkimVerificationStatus() bool`

HasDkimVerificationStatus returns a boolean if a field has been set.


