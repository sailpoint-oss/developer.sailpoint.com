---
id: v1-certifierresponse
title: Certifierresponse
pagination_label: Certifierresponse
sidebar_label: Certifierresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Certifierresponse', 'V1Certifierresponse'] 
slug: /tools/sdk/go/identityhistory/models/certifierresponse
tags: ['SDK', 'Software Development Kit', 'Certifierresponse', 'V1Certifierresponse']
---

# Certifierresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the id of the certifier | [optional] 
**DisplayName** | Pointer to **string** | the name of the certifier | [optional] 

## Methods

### NewCertifierresponse

`func NewCertifierresponse() *Certifierresponse`

NewCertifierresponse instantiates a new Certifierresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertifierresponseWithDefaults

`func NewCertifierresponseWithDefaults() *Certifierresponse`

NewCertifierresponseWithDefaults instantiates a new Certifierresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Certifierresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Certifierresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Certifierresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Certifierresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDisplayName

`func (o *Certifierresponse) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Certifierresponse) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Certifierresponse) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Certifierresponse) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.


