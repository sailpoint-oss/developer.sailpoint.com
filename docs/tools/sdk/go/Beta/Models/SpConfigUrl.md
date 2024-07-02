---
id: sp-config-url
title: SpConfigUrl
pagination_label: SpConfigUrl
sidebar_label: SpConfigUrl
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'SpConfigUrl'] 
slug: /tools/sdk/go/beta/models/sp-config-url
tags: ['SDK', 'Software Development Kit', 'SpConfigUrl']
---

# SpConfigUrl

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** |  Pointer to **string** | URL for the target object endpoint. | [optional] 
**Query** |  Pointer to **map[string]interface{}** | Any query parameters that are needed for the URL. | [optional] 

## Methods

### NewSpConfigUrl

`func NewSpConfigUrl() *SpConfigUrl`

NewSpConfigUrl instantiates a new SpConfigUrl object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpConfigUrlWithDefaults

`func NewSpConfigUrlWithDefaults() *SpConfigUrl`

NewSpConfigUrlWithDefaults instantiates a new SpConfigUrl object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUrl

`func (o *SpConfigUrl) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *SpConfigUrl) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *SpConfigUrl) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *SpConfigUrl) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetQuery

`func (o *SpConfigUrl) GetQuery() map[string]interface{}`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *SpConfigUrl) GetQueryOk() (*map[string]interface{}, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *SpConfigUrl) SetQuery(v map[string]interface{})`

SetQuery sets Query field to given value.

### HasQuery

`func (o *SpConfigUrl) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### SetQueryNil

`func (o *SpConfigUrl) SetQueryNil(b bool)`

 SetQueryNil sets the value for Query to be an explicit nil

### UnsetQuery
`func (o *SpConfigUrl) UnsetQuery()`

UnsetQuery ensures that no value is present for Query, not even an explicit nil

[[Back to top]](#) 


