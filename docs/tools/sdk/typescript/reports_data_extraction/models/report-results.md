# ReportResults

# ReportResults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportType** | **(optional)** `string` | Use this property to define what report should be processed in the RDE service. | [default to undefined]
**taskDefName** | **(optional)** `string` | Name of the task definition which is started to process requesting report. Usually the same as report name | [default to undefined]
**id** | **(optional)** `string` | Unique task definition identifier. | [default to undefined]
**created** | **(optional)** `string` | Report processing start date | [default to undefined]
**status** | **(optional)** `string` | Report current state or result status. | [default to undefined]
**duration** | **(optional)** `number` | Report processing time in ms. | [default to undefined]
**rows** | **(optional)** `number` | Report size in rows. | [default to undefined]
**availableFormats** | **(optional)** `Array<string>` | Output report file formats. This are formats for calling get endpoint as a query parameter \'fileFormat\'.  In case report won\'t have this argument there will be [\'CSV\', \'PDF\'] as default. | [default to undefined]

