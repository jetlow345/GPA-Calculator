function list_child_processes () {
    local ppid=$1;
    local current_children=$(pgrep -P $ppid);
    local local_child;
    if [ $? -eq 0 ];
    then
        for current_child in $current_children
        do
          local_child=$current_child;
          list_child_processes $local_child;
          echo $local_child;
        done;
    else
      return 0;
    fi;
}

ps 79712;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 79712 > /dev/null;
done;

for child in $(list_child_processes 79717);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/jiangxiachen/uq-score-cal/GPA-Calculator/gpa_predictor_cal.Server/bin/Debug/net8.0/35aaa7d6e669424d97192ec14c1670dc.sh;
