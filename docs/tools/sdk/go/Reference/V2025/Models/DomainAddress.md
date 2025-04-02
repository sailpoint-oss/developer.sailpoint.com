---
id: domain-address
title: DomainAddress
pagination_label: DomainAddress
sidebar_label: DomainAddress
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DomainAddress', 'DomainAddress'] 
slug: /tools/sdk/go//models/domain-address
tags: ['SDK', 'Software Development Kit', 'DomainAddress', 'DomainAddress']
---

# DomainAddress

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Domain** | Pointer to **string** | A domain address | [optional] 

## Methods

### NewDomainAddress

`func NewDomainAddress() *DomainAddress`

NewDomainAddress instantiates a new DomainAddress object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDomainAddressWithDefaults

`func NewDomainAddressWithDefaults() *DomainAddress`

NewDomainAddressWithDefaults instantiates a new DomainAddress object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomain

`func (o *DomainAddress) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *DomainAddress) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *DomainAddress) SetDomain(v string)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *DomainAddress) HasDomain() bool`

HasDomain returns a boolean if a field has been set.


