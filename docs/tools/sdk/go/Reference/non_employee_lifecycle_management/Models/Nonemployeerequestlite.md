---
id: v1-nonemployeerequestlite
title: Nonemployeerequestlite
pagination_label: Nonemployeerequestlite
sidebar_label: Nonemployeerequestlite
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeerequestlite', 'V1Nonemployeerequestlite'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeerequestlite
tags: ['SDK', 'Software Development Kit', 'Nonemployeerequestlite', 'V1Nonemployeerequestlite']
---

# Nonemployeerequestlite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Non-Employee request id. | [optional] 
**Requester** | Pointer to [**Nonemployeeidentityreferencewithid**](nonemployeeidentityreferencewithid) |  | [optional] 

## Methods

### NewNonemployeerequestlite

`func NewNonemployeerequestlite() *Nonemployeerequestlite`

NewNonemployeerequestlite instantiates a new Nonemployeerequestlite object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeerequestliteWithDefaults

`func NewNonemployeerequestliteWithDefaults() *Nonemployeerequestlite`

NewNonemployeerequestliteWithDefaults instantiates a new Nonemployeerequestlite object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Nonemployeerequestlite) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Nonemployeerequestlite) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Nonemployeerequestlite) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Nonemployeerequestlite) HasId() bool`

HasId returns a boolean if a field has been set.

### GetRequester

`func (o *Nonemployeerequestlite) GetRequester() Nonemployeeidentityreferencewithid`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *Nonemployeerequestlite) GetRequesterOk() (*Nonemployeeidentityreferencewithid, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *Nonemployeerequestlite) SetRequester(v Nonemployeeidentityreferencewithid)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *Nonemployeerequestlite) HasRequester() bool`

HasRequester returns a boolean if a field has been set.


