---
id: query
title: Query
pagination_label: Query
sidebar_label: Query
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Query', 'Query'] 
slug: /tools/sdk/go/v3/models/query
tags: ['SDK', 'Software Development Kit', 'Query', 'Query']
---

# Query

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | Pointer to **string** | The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | [optional] 
**Fields** | Pointer to **string** | The fields the query will be applied to.  Fields provide you with a simple way to add additional fields to search, without making the query too complicated.  For example, you can use the fields to specify that you want your query of \"a*\" to be applied to \"name\", \"firstName\", and the \"source.name\".  The response will include all results matching the \"a*\" query found in those three fields.  A field's availability depends on the indices being searched.  For example, if you are searching \"identities\", you can apply your search to the \"firstName\" field, but you couldn't use \"firstName\" with a search on \"access profiles\".  Refer to the response schema for the respective lists of available fields.  | [optional] 
**TimeZone** | Pointer to **string** | The time zone to be applied to any range query related to dates. | [optional] 
**InnerHit** | Pointer to [**InnerHit**](inner-hit) |  | [optional] 

## Methods

### NewQuery

`func NewQuery() *Query`

NewQuery instantiates a new Query object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueryWithDefaults

`func NewQueryWithDefaults() *Query`

NewQueryWithDefaults instantiates a new Query object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *Query) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *Query) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *Query) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *Query) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetFields

`func (o *Query) GetFields() string`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *Query) GetFieldsOk() (*string, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *Query) SetFields(v string)`

SetFields sets Fields field to given value.

### HasFields

`func (o *Query) HasFields() bool`

HasFields returns a boolean if a field has been set.

### GetTimeZone

`func (o *Query) GetTimeZone() string`

GetTimeZone returns the TimeZone field if non-nil, zero value otherwise.

### GetTimeZoneOk

`func (o *Query) GetTimeZoneOk() (*string, bool)`

GetTimeZoneOk returns a tuple with the TimeZone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZone

`func (o *Query) SetTimeZone(v string)`

SetTimeZone sets TimeZone field to given value.

### HasTimeZone

`func (o *Query) HasTimeZone() bool`

HasTimeZone returns a boolean if a field has been set.

### GetInnerHit

`func (o *Query) GetInnerHit() InnerHit`

GetInnerHit returns the InnerHit field if non-nil, zero value otherwise.

### GetInnerHitOk

`func (o *Query) GetInnerHitOk() (*InnerHit, bool)`

GetInnerHitOk returns a tuple with the InnerHit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInnerHit

`func (o *Query) SetInnerHit(v InnerHit)`

SetInnerHit sets InnerHit field to given value.

### HasInnerHit

`func (o *Query) HasInnerHit() bool`

HasInnerHit returns a boolean if a field has been set.


