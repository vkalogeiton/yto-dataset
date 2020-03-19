# YouTube-Objects v2.3

Vicky Kalogeiton, Vittorio Ferrari, and Cordelia Schmid

## Description
The dataset is composed of videos collected from YouTube for 10 moving object classes of the PASCAL VOC Challenge. This release 
provides the annotations in PASCAL VOC 2007 format for the same 7,000 bounding-box annotations from the [YTO v2.2](http://calvin.inf.ed.ac.uk/datasets/youtube-objects-dataset/). 

In the training set, we annotated one instance per frame, while in the test set we annotated all instances of the desired object class. 

## Explore
You can explore the annotated frames with the [Dataset viewer](https://vkalogeiton.github.io/yto-dataset/).

## Download
1. Download and extract the directory called `YTOdevkit` 

       curl http://calvin-vision.net/bigstuff/YTOv2.3/YTOdevkit.tar.gz | tar xz

2. Go to the `YTOdevkit` directory 

       cd YTOdevkit

3. Download and extract the `VOCdevkit` Code

       curl http://host.robots.ox.ac.uk/pascal/VOC/voc2007/VOCdevkit_08-Jun-2007.tar | tar x --strip-components 1 VOCdevkit/VOCcode

4. Download and extract the `YouTube-Objects v2.3` image sets, annotations and jpg images 

       curl http://calvin-vision.net/bigstuff/YTOv2.3/YTOImageSets.tar.gz | tar xz -C YTO/
       curl http://calvin-vision.net/bigstuff/YTOv2.3/YTOAnnotations.tar.gz | tar xz -C YTO/
       curl http://calvin-vision.net/bigstuff/YTOv2.3/YTOJPEGImages.tar.gz | tar xz -C YTO/
       
It should have this basic structure
       
    YTOdevkit/             # development kit
    ├── results/           # YTO results
    ├── VOCcode/           # VOC utility code
    ├── YTO/               # image sets, annotations, etc.
    │   ├── Annotations/
    │   ├── ImageSets/
    │   └── JPEGImages/
    └── ...
## References
If you find YouTube-Objects v2.3 useful in your research, please consider citing:

    @article{kalogeiton16pami,
      title={Analysing domain shift factors between videos and images for object detection},
      author={Kalogeiton, Vicky and Ferrari, Vittorio and Schmid, Cordelia},
      journal={IEEE transactions on pattern analysis and machine intelligence},
      volume={38},
      number={11},
      pages={2327--2334},
      year={2016},
      publisher={IEEE}
    }
