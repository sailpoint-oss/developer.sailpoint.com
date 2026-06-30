---
id: v1-domainaddress
title: Domainaddress
pagination_label: Domainaddress
sidebar_label: Domainaddress
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Domainaddress', 'V1Domainaddress'] 
slug: /tools/sdk/go/notifications/models/domainaddress
tags: ['SDK', 'Software Development Kit', 'Domainaddress', 'V1Domainaddress']
---

# Domainaddress

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Domain** | Pointer to **string** | A domain address | [optional] 

## Methods

### NewDomainaddress

`func NewDomainaddress() *Domainaddress`

NewDomainaddress instantiates a new Domainaddress object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDomainaddressWithDefaults

`func NewDomainaddressWithDefaults() *Domainaddress`

NewDomainaddressWithDefaults instantiates a new Domainaddress object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomain

`func (o *Domainaddress) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *Domainaddress) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *Domainaddress) SetDomain(v string)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *Domainaddress) HasDomain() bool`

HasDomain returns a boolean if a field has been set.


