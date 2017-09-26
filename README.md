# YouTube-Objects v2.3

## Explore
You can explore the annotated frames with the [Dataset viewer](https://vkalogeiton.github.io/yto-dataset/).

## Download
1. Download and extract the directory called `YTOdevkit` 

       curl http://groups.inf.ed.ac.uk/calvin/YTOv2.3/YTOdevkit.tar.gz | tar xz

2. Go to the `YTOdevkit` directory 

       cd YTOdevkit

3. Download and extract the `VOCdevkit` Code

       curl http://host.robots.ox.ac.uk/pascal/VOC/voc2007/VOCdevkit_08-Jun-2007.tar | tar x --strip-components 1 VOCdevkit/VOCcode

4. Download and extract the `YouTube-Objects v2.3` image sets, annotations and jpg images 

       curl http://groups.inf.ed.ac.uk/calvin/YTOv2.3/YTOImageSets.tar.gz | tar xz -C YTO/
       curl http://groups.inf.ed.ac.uk/calvin/YTOv2.3/YTOAnnotations.tar.gz | tar xz -C YTO/
       curl http://groups.inf.ed.ac.uk/calvin/YTOv2.3/YTOJPEGImages.tar.gz | tar xz -C YTO/
       
It should have this basic structure
       
    YTOdevkit/             # development kit
    ├── results/           # YTO results
    ├── VOCcode/           # VOC utility code
    ├── YTO/               # image sets, annotations, etc.
    │   ├── Annotations/
    │   ├── ImageSets/
    │   └── JPEGImages/
    └── ...

