---
id: identities-details-report-arguments
title: IdentitiesDetailsReportArguments
pagination_label: IdentitiesDetailsReportArguments
sidebar_label: IdentitiesDetailsReportArguments
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'IdentitiesDetailsReportArguments'] 
slug: /tools/sdk/go/v3/models/identities-details-report-arguments
tags: ['SDK', 'Software Development Kit', 'IdentitiesDetailsReportArguments']
---

# IdentitiesDetailsReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorrelatedOnly** |  **bool** | Boolean FLAG to specify if only correlated identities should be used in report processing | [default to false]
**DefaultS3Bucket** |  **bool** | Use it to set default s3 bucket where generated report will be saved.  In case this argument is false and &#39;s3Bucket&#39; argument is null or absent there will be default s3Bucket assigned to the report. | 
**S3Bucket** |  Pointer to **string** | If you want to be specific you could use this argument with defaultS3Bucket &#x3D; false. | [optional] 

## Methods

### NewIdentitiesDetailsReportArguments

`func NewIdentitiesDetailsReportArguments(correlatedOnly bool, defaultS3Bucket bool, ) *IdentitiesDetailsReportArguments`

NewIdentitiesDetailsReportArguments instantiates a new IdentitiesDetailsReportArguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitiesDetailsReportArgumentsWithDefaults

`func NewIdentitiesDetailsReportArgumentsWithDefaults() *IdentitiesDetailsReportArguments`

NewIdentitiesDetailsReportArgumentsWithDefaults instantiates a new IdentitiesDetailsReportArguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCorrelatedOnly

`func (o *IdentitiesDetailsReportArguments) GetCorrelatedOnly() bool`

GetCorrelatedOnly returns the CorrelatedOnly field if non-nil, zero value otherwise.

### GetCorrelatedOnlyOk

`func (o *IdentitiesDetailsReportArguments) GetCorrelatedOnlyOk() (*bool, bool)`

GetCorrelatedOnlyOk returns a tuple with the CorrelatedOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedOnly

`func (o *IdentitiesDetailsReportArguments) SetCorrelatedOnly(v bool)`

SetCorrelatedOnly sets CorrelatedOnly field to given value.


### GetDefaultS3Bucket

`func (o *IdentitiesDetailsReportArguments) GetDefaultS3Bucket() bool`

GetDefaultS3Bucket returns the DefaultS3Bucket field if non-nil, zero value otherwise.

### GetDefaultS3BucketOk

`func (o *IdentitiesDetailsReportArguments) GetDefaultS3BucketOk() (*bool, bool)`

GetDefaultS3BucketOk returns a tuple with the DefaultS3Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultS3Bucket

`func (o *IdentitiesDetailsReportArguments) SetDefaultS3Bucket(v bool)`

SetDefaultS3Bucket sets DefaultS3Bucket field to given value.


### GetS3Bucket

`func (o *IdentitiesDetailsReportArguments) GetS3Bucket() string`

GetS3Bucket returns the S3Bucket field if non-nil, zero value otherwise.

### GetS3BucketOk

`func (o *IdentitiesDetailsReportArguments) GetS3BucketOk() (*string, bool)`

GetS3BucketOk returns a tuple with the S3Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetS3Bucket

`func (o *IdentitiesDetailsReportArguments) SetS3Bucket(v string)`

SetS3Bucket sets S3Bucket field to given value.

### HasS3Bucket

`func (o *IdentitiesDetailsReportArguments) HasS3Bucket() bool`

HasS3Bucket returns a boolean if a field has been set.


[[Back to top]](#) 


