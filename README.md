# nodejs-ImageComparator

# 📸 Image Comparator Utility for Node.js Projects

## 🔍 Use Case

When applications are opened across various mobile devices (e.g., iPhone, Samsung models), screen dimensions and rendering can differ significantly. This makes it challenging to visually compare how the UI looked in a previous release versus the current one.

**Image Comparator Utility** helps solve this problem by programmatically comparing screenshots and generating a new image that highlights the differences between two versions. This is especially useful for regression testing and ensuring consistent UI across devices.

## ✅ Key Features

*   Compare two UI screenshots and highlight visual differences
*   Useful for responsive UI testing across different screen resolutions
*   Ideal for regression testing in mobile web or hybrid applications
*   Supports integration into CI/CD pipelines
*   Simple and fast CLI or programmatic usage

## 🚀 How It Works

*   Capture screenshots from different releases (e.g., before and after a deployment)
*   Run the utility to compare two images
*   A new image is generated with highlighted visual differences

I have used 2 different libraries which can be used to compare images.

1.  pixelmatch
2.  resemble (also computes difference %)

## ⚙️ Pre-requisites

Make sure you have the following installed before using the utility:

*   [Node.js](https://nodejs.org/) (v14 or higher recommended)
*   npm or yarn
*   Image files (baseline and current) for comparison

## 📦 Installation

`npm install or npm i`

_installs packages mentioned in package.json file_

## 📁 Folder Structure

```
-screenshots
--v1
---source images
--v2
---target images
```

## 🛠️ Usage 

### CLI

```
node .\imageComparator-pixelMatch.js

//generates diff-pixelMatch.png
```

```
node .\imageComparator-resemble.js

//generates diff-resemble.png and in console displays Mismatch Percentage
```

## 🧪 Example Output

![](https://github.com/PriyankaPoojari/nodejs-ImageComparator/blob/master/output.png)

Diff image:

![](https://github.com/PriyankaPoojari/nodejs-ImageComparator/blob/master/diff-resemble.png)