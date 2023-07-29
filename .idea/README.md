if you are using clion, set it up by:
  * close clion if it's running
  * clean .idea if you ran it before:
    * `(cd $RUNSWIFT_CHECKOUT_DIR && git clean -fdx .idea)`
  * set up the toolchains by using:
    * `CLION_DIR=~/.CLion2019.2`
      * Change this to your version of clion if necessary 
    * `sed s@'$USER_HOME$/runswift'@"$RUNSWIFT_CHECKOUT_DIR"@g "$RUNSWIFT_CHECKOUT_DIR/.idea/config/options/cpp.toolchains.xml" > $CLION_DIR/./config/options/cpp.toolchains.xml`
      * This copies `config/options/cpp.toolchains.xml` to `$CLION_DIR/./config/options/cpp.toolchains.xml` and modifies the copy to point to your runswift checkout dir
  * set up build types by using:
    * `cp $RUNSWIFT_CHECKOUT_DIR/.idea/workspace.xml.shared $RUNSWIFT_CHECKOUT_DIR/.idea/workspace.xml`
      * This copies `workspace.xml.shared` to `$RUNSWIFT_CHECKOUT_DIR/.idea/workspace.xml`
  * use the command line to launch clion and open the project (always use the command link when launching clion so it picks up $RUNSWIFT_CHECKOUT_DIR)
  * install the EditorConfig plugin
  * in the project pane, select `CMakeLists.txt`
    * right click
    * Load CMake Project
  * in the project pane, select the `build*` directories, `ctc`, and `softwares`
    * right click
    * mark directory as
    * excluded
