---
id: v1-innerhit
title: Innerhit
pagination_label: Innerhit
sidebar_label: Innerhit
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Innerhit', 'V1Innerhit'] 
slug: /tools/sdk/go/search/models/innerhit
tags: ['SDK', 'Software Development Kit', 'Innerhit', 'V1Innerhit']
---

# Innerhit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **string** | The search query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | 
**Type** | **string** | The nested type to use in the inner hits query.  The nested type [Nested Type](https://www.elastic.co/guide/en/elasticsearch/reference/current/nested.html) refers to a document \"nested\" within another document. For example, an identity can have nested documents for access, accounts, and apps. | 

## Methods

### NewInnerhit

`func NewInnerhit(query string, type_ string, ) *Innerhit`

NewInnerhit instantiates a new Innerhit object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInnerhitWithDefaults

`func NewInnerhitWithDefaults() *Innerhit`

NewInnerhitWithDefaults instantiates a new Innerhit object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *Innerhit) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *Innerhit) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *Innerhit) SetQuery(v string)`

SetQuery sets Query field to given value.


### GetType

`func (o *Innerhit) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Innerhit) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Innerhit) SetType(v string)`

SetType sets Type field to given value.



