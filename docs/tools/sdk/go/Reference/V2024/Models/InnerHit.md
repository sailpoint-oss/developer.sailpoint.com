---
id: v2024-inner-hit
title: InnerHit
pagination_label: InnerHit
sidebar_label: InnerHit
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'InnerHit', 'V2024InnerHit'] 
slug: /tools/sdk/go/v2024/models/inner-hit
tags: ['SDK', 'Software Development Kit', 'InnerHit', 'V2024InnerHit']
---

# InnerHit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **string** | The search query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | 
**Type** | **string** | The nested type to use in the inner hits query.  The nested type [Nested Type](https://www.elastic.co/guide/en/elasticsearch/reference/current/nested.html) refers to a document \"nested\" within another document. For example, an identity can have nested documents for access, accounts, and apps. | 

## Methods

### NewInnerHit

`func NewInnerHit(query string, type_ string, ) *InnerHit`

NewInnerHit instantiates a new InnerHit object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInnerHitWithDefaults

`func NewInnerHitWithDefaults() *InnerHit`

NewInnerHitWithDefaults instantiates a new InnerHit object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *InnerHit) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *InnerHit) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *InnerHit) SetQuery(v string)`

SetQuery sets Query field to given value.


### GetType

`func (o *InnerHit) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *InnerHit) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *InnerHit) SetType(v string)`

SetType sets Type field to given value.



