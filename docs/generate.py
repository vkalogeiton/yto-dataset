from glob import glob
from os import listdir
from random import sample

classes = listdir('img/gt-images')

s = '<div class="col-3 mb-3 annot annot-{}" style="display: none"><img class="img-fluid" src="#" data-src="{}"></div>'

for cls in classes:
    paths = glob('img/gt-images/{}/*'.format(cls))
    for path in paths:
    #for path in sample(paths, min(50, len(paths))):
        print(s.format(cls, path))
