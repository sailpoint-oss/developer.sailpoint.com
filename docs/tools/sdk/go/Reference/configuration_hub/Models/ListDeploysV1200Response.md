---
id: v1-list-deploys-v1200-response
title: ListDeploysV1200Response
pagination_label: ListDeploysV1200Response
sidebar_label: ListDeploysV1200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListDeploysV1200Response', 'V1ListDeploysV1200Response'] 
slug: /tools/sdk/go/configurationhub/models/list-deploys-v1200-response
tags: ['SDK', 'Software Development Kit', 'ListDeploysV1200Response', 'V1ListDeploysV1200Response']
---

# ListDeploysV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | Pointer to [**[]Deployresponse**](deployresponse) | list of deployments | [optional] 

## Methods

### NewListDeploysV1200Response

`func NewListDeploysV1200Response() *ListDeploysV1200Response`

NewListDeploysV1200Response instantiates a new ListDeploysV1200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListDeploysV1200ResponseWithDefaults

`func NewListDeploysV1200ResponseWithDefaults() *ListDeploysV1200Response`

NewListDeploysV1200ResponseWithDefaults instantiates a new ListDeploysV1200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *ListDeploysV1200Response) GetItems() []Deployresponse`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *ListDeploysV1200Response) GetItemsOk() (*[]Deployresponse, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *ListDeploysV1200Response) SetItems(v []Deployresponse)`

SetItems sets Items field to given value.

### HasItems

`func (o *ListDeploysV1200Response) HasItems() bool`

HasItems returns a boolean if a field has been set.


