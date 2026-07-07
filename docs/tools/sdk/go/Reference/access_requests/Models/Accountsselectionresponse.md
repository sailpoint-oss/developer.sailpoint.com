---
id: v1-accountsselectionresponse
title: Accountsselectionresponse
pagination_label: Accountsselectionresponse
sidebar_label: Accountsselectionresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountsselectionresponse', 'V1Accountsselectionresponse'] 
slug: /tools/sdk/go/accessrequests/models/accountsselectionresponse
tags: ['SDK', 'Software Development Kit', 'Accountsselectionresponse', 'V1Accountsselectionresponse']
---

# Accountsselectionresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identities** | Pointer to [**[]Identityaccountselections**](identityaccountselections) | A list of available account selections per identity in the request, for all the requested items | [optional] 

## Methods

### NewAccountsselectionresponse

`func NewAccountsselectionresponse() *Accountsselectionresponse`

NewAccountsselectionresponse instantiates a new Accountsselectionresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountsselectionresponseWithDefaults

`func NewAccountsselectionresponseWithDefaults() *Accountsselectionresponse`

NewAccountsselectionresponseWithDefaults instantiates a new Accountsselectionresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentities

`func (o *Accountsselectionresponse) GetIdentities() []Identityaccountselections`

GetIdentities returns the Identities field if non-nil, zero value otherwise.

### GetIdentitiesOk

`func (o *Accountsselectionresponse) GetIdentitiesOk() (*[]Identityaccountselections, bool)`

GetIdentitiesOk returns a tuple with the Identities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentities

`func (o *Accountsselectionresponse) SetIdentities(v []Identityaccountselections)`

SetIdentities sets Identities field to given value.

### HasIdentities

`func (o *Accountsselectionresponse) HasIdentities() bool`

HasIdentities returns a boolean if a field has been set.


